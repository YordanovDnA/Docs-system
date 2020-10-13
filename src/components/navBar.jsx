import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import Notifications from "./notification";

const NavBar = ({ user }) => {
  const convertUsername = (username) => {
    const converted = username.replace(
      username.charAt(0),
      username.charAt(0).toUpperCase()
    );
    return converted;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-12 shadow">
      <NavLink className="navbar-brand" to="/">
        <FontAwesomeIcon
          className="text-info ml-3"
          style={{ fontSize: 50 }}
          icon={faUserMd}
        />
        <span style={{ fontSize: 20 }} className="badge badge-info">
          Docs
        </span>
      </NavLink>
      <Notifications />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse mt-3" id="navbarText">
        {!user && (
          <React.Fragment>
            <div
              style={{ marginLeft: "auto" }}
              className="d-flex justify-content-end "
            >
              <NavLink
                className="btn btn-outline-info my-2 my-sm-0"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="btn btn-outline-info my-2 my-sm-0 ml-3 mr-3"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          </React.Fragment>
        )}
        {user && (
          <div
            style={{ marginLeft: "auto" }}
            className="d-flex justify-content-end"
          >
            <NavLink className="text-info my-2 p-2 my-sm-0" to="/username">
              {convertUsername(user.login.username)}
            </NavLink>
            <NavLink
              className="btn btn-outline-info my-2 my-sm-0 ml-3 mr-3"
              to="/logout"
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
