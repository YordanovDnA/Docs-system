import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import * as style from "../style";

const Colegues = () => {
  //Get colegues
  const colegues = useSelector((state) => state.entities.users);

  //Loading
  let loading = true;
  loading = colegues.loading;

  //Coppy to clipboard
  const onCoppy = (title, value) => {
    toast.success(`${title}: ${value} coppied to clipboard!`);
  };

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {colegues.list.map((colegue) => {
              return (
                <tr key={colegue.id}>
                  <th scope="row">
                    <img src={colegue.picture.large} alt={colegue.name.first} />
                  </th>
                  <td>
                    <strong>
                      {colegue.name.first + " " + colegue.name.last}
                    </strong>
                  </td>
                  <td>{colegue.jobTitle}</td>
                  <td>
                    <CopyToClipboard text={colegue.email}>
                      <button
                        className="btn btn-sm btn-info"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Coppy to clipboard!"
                        onClick={() => onCoppy("Email", colegue.email)}
                      >
                        {colegue.email}
                      </button>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        toast.error("This function is still not available!")
                      }
                      className="btn btn-info"
                    >
                      Message
                    </button>
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
            Loading...
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Colegues;
