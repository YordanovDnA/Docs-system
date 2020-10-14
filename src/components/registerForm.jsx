import React, { Component } from "react";
import { toast } from "react-toastify";

class RegisterForm extends Component {
  state = {};
  render() {
    return (
      <div className="col-xl-5 col-lg-7 col-md-8 col-sm-10 col-12 mt-5 mx-auto text-dark">
        <form
          style={{ padding: "80px 50px" }}
          className="bg-light rounded shadow border"
        >
          <h3 className="text-center mb-3">Register</h3>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Password</label>
            <input
              type="password"
              name="password2"
              className="form-control"
              id="confirmpassword"
              placeholder="Password Again"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              I accept terms and conditions
            </label>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              toast.error(
                "This feature is not available in prototype version."
              );
            }}
            className="btn btn-outline-info float-right mb-3"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
