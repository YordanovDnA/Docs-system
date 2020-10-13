import React from "react";
import ReactImageAppear from "react-image-appear";

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
            This project is about hospital documents system. It allows the
            nurces create discharging letters for patiets and after head nurse
            and surgeont approved the document to be download or printed.
            <br />
            <br />
            To test the application you can use some of the users provided from
            the table on the <a href="/login">Login</a> page.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageDescription;
