import React, { Component } from "react";
import ReactImageAppear from "react-image-appear";

class NoMatch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className=" col-md-5 mx-auto mt-5">
          <ReactImageAppear
            className="w-100"
            src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
          />
        </div>
        <h1 className="text-center">Ups...something wrong. Not such a page.</h1>
      </React.Fragment>
    );
  }
}

export default NoMatch;
