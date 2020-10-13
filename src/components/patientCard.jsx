import React from "react";
import Note from "./note";
import PatientNotes from "./patientNotes";
import PatientCardInfo from "./patientCardInfo";
import { useSelector } from "react-redux";

const PatientCard = (props) => {
  //Getting patients
  const patients = useSelector((state) => state.entities.patients.list);

  //Getting patient
  const { id } = props.match.params;
  const index = patients.findIndex((patient) => patient.id === id);
  const patient = patients[index];

  //Object destructuring
  const { notes } = patient;

  //Handle note submit
  const handleNoteSubmit = (id, note) => {
    console.log("Submit");
  };

  return (
    <React.Fragment>
      <div
        className="card mx-auto mt-5"
        style={{ minWidth: "18rem", maxWidth: "50rem", width: "100%" }}
      >
        <div className="card-body row">
          {/* Patient Information on the card */}
          <PatientCardInfo patient={patient} />
          <div className="col-md-8">
            {/* New note form  */}
            <Note uuid={id} onClick={handleNoteSubmit} />
          </div>
        </div>
      </div>
      {/* Rendering all patient notes */}
      <PatientNotes notes={notes} />
    </React.Fragment>
  );
};

export default PatientCard;
