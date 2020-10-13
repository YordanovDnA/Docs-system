import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import * as style from "../style";

const Archive = () => {
  const patients = useSelector((state) => state.entities.patients.list);
  const dischargedPatients = patients.filter(
    (patient) => patient.discharging.discharged
  );

  const loading = useSelector((state) => state.entities.patients.loading);

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {dischargedPatients.map((patient) => {
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
                      </Link>
                    }
                  </td>
                  <td>{patient.dob.age}</td>
                  <td>{patient.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
        {!loading && dischargedPatients.length < 1 && (
          <div className="alert alert-info" role="alert">
            There is nothing to show!
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Archive;
