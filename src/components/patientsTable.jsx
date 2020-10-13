import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { dischargePatient } from "../store/patients";
import { getUser } from "../services/authService";
import ClipLoader from "react-spinners/ClipLoader";
import * as style from "../style";

//jQuery for tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const PatientsTable = () => {
  const dispatch = useDispatch();

  //Get patients from the store
  const patients = useSelector((state) => state.entities.patients);
  const patientsInHouse = patients.list.filter(
    (patient) => !patient.discharging.discharged
  );

  //Get the user
  const { accessLevel } = getUser();

  //Loading
  let loading = true;
  loading = patients.loading;

  //On discharge
  const onDischarge = (id) => {
    dispatch(dischargePatient(id));
  };

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <Link to="/addPatient" className="btn btn-sm btn-success">
                  Add new
                </Link>
              </th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Discharging</th>
            </tr>
          </thead>
          <tbody>
            {patientsInHouse.map((patient) => {
              return (
                <tr key={patient.id}>
                  <th scope="row">
                    <img
                      src={patient.picture.large}
                      alt={`Patient ${patient.name.first}`}
                    />
                  </th>
                  <td>
                    {
                      <Link to={`/patient/${patient.id}`}>
                        {patient.name.first + " " + patient.name.last}
                        {accessLevel < 2 &&
                          patient.discharging.letterApproved &&
                          !patient.discharging.discharged && (
                            <span className="ml-2 badge badge-pill badge-danger">
                              Ready for discharge
                            </span>
                          )}
                      </Link>
                    }
                  </td>
                  <td>{patient.dob.age}</td>
                  <td>{patient.gender}</td>
                  <td>
                    {/* Create new letter - The first stage of discharging process */}
                    {accessLevel < 2 && !patient.discharging.dischargeLetter && (
                      <Link
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Click to create discharging letter!"
                        className="btn btn-sm btn-info"
                        to={`/newLetter/${patient.id}`}
                      >
                        New letter
                      </Link>
                    )}

                    {/* Discharging process status- waiting the head nurce and surgeon to approve the letter */}
                    {patient.discharging.inProcess && accessLevel < 2 ? (
                      <React.Fragment>
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Waiting the document to be signed!"
                          className="badge badge-warning p-2"
                        >
                          In process
                        </span>
                        <br />
                      </React.Fragment>
                    ) : null}

                    {/* Letter waiting approval - Head nurse */}
                    {accessLevel === 2 &&
                    patient.discharging.dischargeLetter &&
                    !patient.discharging.letter.headNurseApproved ? (
                      <Link
                        to={`/newLetter/${patient.id}`}
                        className="btn btn-sm btn-success mt-2"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Waiting for your approval"
                      >
                        Approve letter
                      </Link>
                    ) : null}

                    {accessLevel === 2 &&
                    patient.discharging.letter.headNurseApproved &&
                    !patient.discharging.letter.surgeonApproved ? (
                      <React.Fragment>
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Waiting the document to be signed!"
                          className="badge badge-warning p-2"
                        >
                          Waiting surgeon to approved
                        </span>
                        <br />
                      </React.Fragment>
                    ) : null}

                    {/* Letter waiting approval - Surgeon */}
                    {accessLevel > 2 &&
                    patient.discharging.dischargeLetter &&
                    !patient.discharging.letter.surgeonApproved &&
                    patient.discharging.letter.headNurseApproved ? (
                      <Link
                        to={`/newLetter/${patient.id}`}
                        className="btn btn-sm btn-success mt-2"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Waiting for your approval!"
                      >
                        Approve letter
                      </Link>
                    ) : null}

                    {accessLevel === 3 &&
                    patient.discharging.dischargeLetter &&
                    !patient.discharging.letter.headNurseApproved &&
                    !patient.discharging.letter.surgeonApproved ? (
                      <React.Fragment>
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Waiting the document to be signed!"
                          className="badge badge-warning p-2"
                        >
                          Waiting head nurce to approved
                        </span>
                        <br />
                      </React.Fragment>
                    ) : null}

                    {accessLevel > 1 &&
                      patient.discharging.letterApproved &&
                      !patient.discharging.discharged && (
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Waiting to be discharged from the nurce!"
                          className="badge badge-warning p-2"
                        >
                          Waiting for discharge
                        </span>
                      )}

                    {/* Letter approved - this is showed when the patient letter has been approved and the patient can be discharged.  */}
                    {accessLevel < 2 && patient.discharging.letterApproved && (
                      <React.Fragment>
                        <Link
                          className="btn btn-sm btn-info"
                          to={`/letterPreview/${patient.id}`}
                        >
                          See letter
                        </Link>
                        <br />
                        <button
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Discharge the patient!"
                          onClick={() => onDischarge(patient.id)}
                          className="btn btn-sm btn-success mt-2"
                        >
                          Discharge
                        </button>
                      </React.Fragment>
                    )}

                    {accessLevel > 1 && !patient.discharging.dischargeLetter && (
                      <React.Fragment>
                        <span
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Waiting the letter to be created from the nurce!"
                          className="badge badge-info p-2"
                        >
                          No letter
                        </span>
                        <br />
                      </React.Fragment>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Loading bar */}
        {loading && (
          <div style={{ textAlign: "center" }}>
            <ClipLoader
              css={style.override}
              size={150}
              color={"17A2B8"}
              loading={loading}
            />
            Loading...
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PatientsTable;
