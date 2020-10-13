import React, { Component } from "react";
import { authService } from "./../services/authService";

class LoginForm extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    authService(this.state.user);
  };

  onChange = (e) => {
    const user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };

  render() {
    return (
      <div className="col-xl-5 col-lg-7 col-md-8 col-sm-10 col-12 mt-5 text-dark mx-auto">
        <form
          style={{ padding: "80px 50px" }}
          className="bg-light rounded shadow border"
        >
          <h3 className="text-center">LogIn</h3>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={this.onChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Email that you have used while registration.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
            <button
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-outline-info float-right mb-3"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
