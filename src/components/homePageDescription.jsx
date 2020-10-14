import React from "react";
import ReactImageAppear from "react-image-appear";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePageDescription = () => {
  return (
    <React.Fragment>
      <h1 className="alert-info text-center text-dark mt-3 mb-5 pt-3 pb-5 rounded shadow">
        Welcome to Docs
      </h1>
      <div className="row">
        <div className="col-12 col-xlg-6 d-flex justify-content-center">
          <ReactImageAppear src="https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" />
        </div>
        <div className="col-12 col-xlg-6 ">
          <h2 className="text-center text-secondary mt-5">
            What is all about?
          </h2>
          <p
            className=" m-4 p-5 mx-auto border shadow rounded"
            style={{ maxWidth: 800, fontSize: 23 }}
          >
            Docs is a hospital document system. It allows the nurses to create
            discharging letters for patients, and after the head nurse and
            surgeon approved the document to be download, and the patient can be
            discharged.
            <br />
            <br />
            <span className="p-2 aler alert-secondary rounded">
              <FontAwesomeIcon icon={faGithub} /> GitHub repository:
              <Link
                className="ml-2"
                to="https://github.com/YordanovDnA/Docs-system"
              >
                click
              </Link>
              .
            </span>
            <br />
            <br />
            To test the application you can use some of the users provided from
            the table on the <a href="/login">Login</a> page.
            <br />
            <br />
            <div className="alert alert-success p-2 text-dark">
              <strong>Steps:</strong>
              <span className="ml-2 mt-2 d-block">
                1. Log in with one of the nurses.
              </span>
              <span className="ml-2 mt-2 d-block">
                2. Create a new discharging letter for a patient.
              </span>
              <span className="ml-2 mt-2 d-block">
                3. Log out and log in with the head nurse.
              </span>
              <span className="ml-2 mt-2 d-block">
                4. Update the letter, and approve it.
              </span>
              <span className="ml-2 mt-2 d-block">
                5. Log out and log in with the surgeon.
              </span>
              <span className="ml-2 mt-2 d-block">
                6. Update the letter, and approve it.
              </span>
              <span className="ml-2 mt-2 d-block">
                7. Log out and log in with a nurse again.
              </span>
              <span className="ml-2 mt-2 d-block">
                8. You can now see the document, download it, and discharge the
                patient.
              </span>
            </div>
            <hr />
            <div style={{ fontSize: 16 }}>
              Developed using <FontAwesomeIcon color="#5FD1F7" icon={faReact} />
              React.
            </div>
            <div style={{ fontSize: 16 }}>
              <span>Developer:</span>
              <Link to="http://iliyanyordanov.com">ILIYAN YORDANOV</Link>
            </div>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageDescription;
