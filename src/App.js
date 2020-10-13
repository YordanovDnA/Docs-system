import React, { Component } from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import Navigation from "./components/navigation";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import Login from "./components/login";
import HomePage from "./components/homePage";
import Logout from "./components/logout";
import NoMatch from "./components/404page";
import PatientsTable from "./components/patientsTable";
import AddPatient from './components/addPatient';
import Colegues from "./components/colegues";
import Archive from "./components/archive";
import PatientCard from "./components/patientCard";
import DischargingLetter from "./components/dischargingLetter";
import LetterPreview from "./components/letterPreview";
import ProtectedRoute from "./components/protectedRoute";
import { getUser } from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { loadPatients } from "./store/patients";
import { loadUsers } from "./store/users";

const store = configureStore();

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    store.dispatch(loadUsers());
    const user = getUser();
    if (user) {
      this.setState({ user });
      setInterval(() => {
        store.dispatch(loadPatients());
      }, 2000);
    }
  }

  render() {
    const { user } = this.state;
    return (
      <Provider store={store}>
        <React.Fragment>
          <ToastContainer style={{ marginTop: 70 }} transition={Zoom} />
          <div className="row">
            <NavBar user={user} />
            {user && (
              <React.Fragment>
                <div className="col-lg-2 ">
                  <Navigation />
                </div>
              </React.Fragment>
            )}

            <div className={user ? "col-lg-10" : "col-12"}>
              {/* Declaring routes to the Navigation links 
            from NavBar.jsx and Navigation.jsx */}
              <Switch>
                {/* Creating new discharging letter taking patient id as a property. 
              Only showed for nurces except the Head nurce*/}
                <ProtectedRoute
                  path="/newLetter/:id"
                  component={DischargingLetter}
                />
                {/* Preview the letter and download it before discharging. 
              Only showed for nurces except the Head nurce*/}
                <ProtectedRoute
                  path="/letterPreview/:id"
                  component={LetterPreview}
                />
                <ProtectedRoute path="/patient/:id" component={PatientCard} />
                <ProtectedRoute path="/addPatient" component={AddPatient} />
                <ProtectedRoute path="/patients" component={PatientsTable} />
                <ProtectedRoute path="/colegues" component={Colegues} />
                <ProtectedRoute path="/archive" component={Archive} />
                <Route path="/logout" component={Logout} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={RegisterForm} />
                <Route exact path="/" component={HomePage} />
                <Route path="*" component={NoMatch} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
