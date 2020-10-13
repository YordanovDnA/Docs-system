import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="list-group">
          <NavLink
            to="/patients"
            type="button"
            className="list-group-item list-group-item-action "
          >
            Patients
          </NavLink>

          <NavLink
            to="/colegues"
            type="button"
            className="list-group-item list-group-item-action "
          >
            Colegues
          </NavLink>

          <NavLink
            to="/archive"
            type="button"
            className="list-group-item list-group-item-action "
          >
            Archive
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
