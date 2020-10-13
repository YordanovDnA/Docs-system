import React from "react";
import DownloadPDFLetter from "./letterToPDF";
import { useSelector } from "react-redux";

const LetterPreview = (props) => {
  //Get patients
  const patients = useSelector((state) => state.entities.patients);
  //Get letter & signedBy
  const { id } = props.match.params;
  const patient = patients.list.find((patient) => patient.id === id);
  const letter = patient.discharging.letter;
  const { body, createdBy, signedBy } = letter;

  let renderDownloadFile = (
    <DownloadPDFLetter letter={letter} signedBy={signedBy} />
  );

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
            National Health Service <br />
            [Hospital name] <br />
            [Hospital address] <br />
            [Hospital contact information]
          </p>
        </div>
        <hr />
        <div className="form-group mt-5 mb-5">
          <textarea
            disabled
            defaultValue={body}
            autoFocus={true}
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
            {signedBy[0]}
            <br />
            {signedBy[1]}
          </div>
        </div>
        <hr />
        {/* Rendering the DownloadPDFLetter */}
        <div className="d-flex justify-content-end">
          {renderDownloadFile ? renderDownloadFile : "null"}
        </div>
      </form>
    </div>
  );
};

export default LetterPreview;
