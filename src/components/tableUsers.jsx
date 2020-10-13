import React from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import $ from "jquery";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import * as style from "../style";

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const TableUsers = () => {
  //Users from the store
  const users = useSelector((state) => state.entities.users);

  //Loading
  let loading = true;
  loading = users.loading;

  //Coppy to clipboard
  const onCoppy = (title, value) => {
    toast.success(`${title}: ${value} coppied to clipboard!`);
  };

  return (
    <React.Fragment>
      <div className="mt-5 mr-2 ml-2">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Job title</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.list.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <a href={user.picture.large}>
                      <img
                        className="rounded border shadow mx-auto d-block"
                        src={user.picture.large}
                        alt={user.name.first + "'s picture"}
                      />
                    </a>
                  </td>
                  <td>{user.name.first + " " + user.name.last}</td>
                  <td>{user.jobTitle}</td>
                  <td>{user.login.username}</td>
                  <td>
                    <CopyToClipboard text={user.email}>
                      <button
                        className="btn btn-sm btn-info"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Coppy to clipboard!"
                        onClick={() => onCoppy("Email", user.email)}
                      >
                        {user.email}
                      </button>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <CopyToClipboard text={user.login.password}>
                      <button
                        className="btn btn-sm btn-info"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Coppy to clipboard!"
                        onClick={() => onCoppy("Password", user.login.password)}
                      >
                        {user.login.password}
                      </button>
                    </CopyToClipboard>
                  </td>
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
              color={"#123abc"}
              loading={loading}
            />
            Loadig...
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default TableUsers;
