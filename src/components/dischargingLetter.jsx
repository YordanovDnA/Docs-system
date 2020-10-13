import { values } from "lodash";
import React, { Component } from "react";
import { getUser } from "../services/authService";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import {
  addDischargingLetter,
  headNurceApprove,
  surgeonApprove,
} from "./../store/patients";

class DischargingLetter extends Component {
  state = {
    letter: {
      patientName: "",
      date: "",
      body: "",
      createdBy: "",
      headNurseApproved: false,
      surgeonApproved: false,
      signedBy: [],
    },
    id: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const patients = this.props.patients;
    const patient = patients.find((patient) => patient.id === id);
    const { accessLevel, jobTitle } = getUser();
    const { createdBy, body } = patient.discharging.letter;

    // const patient = getPatient(id);
    const letter = { ...this.state.letter };

    //Get the patient name
    const patientName = values(patient.name).join(" ");

    //Update the letter info
    letter.patientName = patientName;

    if (accessLevel < 2) {
      const createdBy = values(getUser().name).join(" ");
      letter.body = `Dear ${patientName},\n\nToday ${new Date().getUTCDate()}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCFullYear()}, we are discharging you from [Hospital name].\n\n[Some information about the following days]\n\nDiagnose:\n\n[Write the diagnose of the patient here]\n\n Additional information:\n\n [Write any additional information for the patient]`;
      letter.createdBy = createdBy + " - " + jobTitle;
    } else {
      letter.body = body;
      letter.createdBy = createdBy;
    }

    //Update the state
    this.setState({ letter });
  }

  //Update the state on change
  onChange = (e) => {
    const letter = { ...this.state.letter };
    letter[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ letter });
  };

  //Submit the discharging letter
  submitLetter = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const discharging = {
      letter: { ...this.state.letter },
      inProcess: true,
      dischargeLetter: true,
      letterApproved: false,
      discharged: false,
    };

    this.props.addDischargingLetter(id, discharging);

    this.props.history.replace(`/patients`);
    toast.success(
      `${this.state.letter.patientName} letter has been send for approval. `
    );
  };

  //Approve discharging letter
  approveLetter = (e) => {
    e.preventDefault();
    console.log("Approved");
    const { id } = this.props.match.params;
    const user = getUser();
    const discharging = {
      letter: { ...this.state.letter },
      inProcess: true,
      dischargeLetter: true,
      letterApproved: false,
      discharged: false,
    };
    const signedBy = values(user.name).join(" ") + " - " + user.jobTitle;
    if (user.accessLevel === 2)
      this.props.headNurceApprove(id, discharging, signedBy);
    if (user.accessLevel === 3)
      this.props.surgeonApprove(id, discharging, signedBy);
    this.props.history.replace("/patients");
  };

  render() {
    const { createdBy, body, signedBy } = this.state.letter;
    const { accessLevel } = getUser();
    return (
      <div>
        <form className="col-md-6 mx-auto mt-5 border shadow pt-5 pb-5 pl-3 pr-3">
          <div className="mb-2">
            <h4
              style={{ fontWeight: "lighter" }}
              className="text-center text-muted"
            >
              Discharging letter
            </h4>
            <p className="text-right">
              National Health Service <br /> [Hospital name] <br /> [Hospital
              address] <br />
              [Hospital contact information]
            </p>
          </div>
          <hr />
          <div className="form-group mt-5 mb-5">
            <textarea
              defaultValue={body}
              autoFocus={true}
              onChange={this.onChange}
              className="form-control"
              name="body"
              cols="30"
              rows="13"
            ></textarea>
          </div>
          <hr />
          <div className="pl-2 pr-2 row">
            <div className=" col-6">
              Yours sincerely, <br />
              {createdBy}
            </div>
            <div className="text-right col-6">
              {signedBy[0] && signedBy[1]
                ? "Signed by:"
                : "**Document is not signed**"}{" "}
              <br /> {signedBy[0] ? signedBy[0] : "[head nurse]"}
              <br /> {signedBy[1] ? signedBy[1] : "[surgeon]"}
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <button
              onClick={accessLevel < 2 ? this.submitLetter : this.approveLetter}
              className="btn btn-sm btn-primary"
            >
              {accessLevel < 2 ? "Save" : "Aprove"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    patients: state.entities.patients.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addDischargingLetter: (id, discharging) =>
    dispatch(addDischargingLetter(id, discharging)),

  headNurceApprove: (id, discharging, signedBy) =>
    dispatch(headNurceApprove(id, discharging, signedBy)),

  surgeonApprove: (id, discharging, signedBy) =>
    dispatch(surgeonApprove(id, discharging, signedBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DischargingLetter);
