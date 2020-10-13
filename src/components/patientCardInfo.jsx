import React from "react";
import { Link } from "react-router-dom";

const PatientCardInfo = ({ patient }) => {
  console.log(patient);
  const { id, name, picture, gender, age, location } = patient;

  return (
    <React.Fragment>
      <div className="col">
        <img className=" mt-2" src={picture.large} alt="" />
        <h5 className="card-title  mt-2">
          {name.title + " " + name.first + " " + name.last}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Gender: {gender}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Address:</h6>
        <p className="card-text">
          {location.street.number}, {location.street.name} <br />
          {location.city},{location.country} <br />
          {location.postcode}
        </p>
        {patient.discharging.letterApproved && (
          <Link className="btn btn-sm btn-info" to={`/letterPreview/${id}`}>
            See letter
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default PatientCardInfo;
