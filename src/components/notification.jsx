import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import $ from "jquery";
import { getUser } from "../services/authService";
import { useSelector } from "react-redux";

$(document).ready(function () {
  $('[data-toggle="popover"]').popover({
    trigger: "focus",
    html: true,
  });
});

const Notifications = () => {
  //Getting the patients
  const patients = useSelector((state) => state.entities.patients.list);

  //Getting the user
  const user = getUser();

  //Getting ready for discharge patients
  const readyForDischarge = patients.filter(
    (patient) =>
      patient.discharging.letterApproved &&
      patient.discharging.discharged === false
  );

  //Getting patients that waiting for discharging letter approval from head nurce
  const patientsWaitingLetterApprovalHeadNurce = patients.filter(
    (patient) =>
      patient.discharging.dischargeLetter &&
      patient.discharging.inProcess &&
      !patient.discharging.letter.headNurseApproved
  );

  //Getting patinets that waiting for discharging letter approval from surgeon
  const patientsWaitingLetterApprovalSurgeon = patients.filter(
    (patient) =>
      patient.discharging.dischargeLetter &&
      patient.discharging.inProcess &&
      patient.discharging.letter.headNurseApproved &&
      !patient.discharging.letter.surgeonApproved
  );

  const popoverContentNurce = readyForDischarge.map((patient) => {
    return `<div key=${patient.id} class="bg-success text-light border p-1 mt-2"><strong>${patient.name.title} ${patient.name.first} ${patient.name.last}</strong> is ready for disharging!</div>`;
  });

  const popoverContentHeadNurce = patientsWaitingLetterApprovalHeadNurce.map(
    (patient) => {
      return `<div key=${patient.id} class="bg-success text-light border p-1 mt-2"><strong>${patient.name.title} ${patient.name.first} ${patient.name.last}</strong> discharging letter waiting for approval!</div>`;
    }
  );

  const popoverContentSurgeon = patientsWaitingLetterApprovalSurgeon.map(
    (patient) => {
      return `<div key=${patient.id} class="bg-success text-light border p-1 mt-2"><strong>${patient.name.title} ${patient.name.first} ${patient.name.last}</strong> discharging letter waiting for approval!</div>`;
    }
  );

  return (
    <React.Fragment>
      {/* Notifications for Nurces */}
      {user && user.accessLevel < 2 && (
        <button
          style={{ borderRadius: 50 }}
          className="btn mt-3"
          data-triger="focus"
          data-toggle="popover"
          data-placement="bottom"
          title="Notifications"
          data-content={popoverContentNurce.join("")}
        >
          <FontAwesomeIcon style={{ fontSize: 35 }} icon={faBell} />
          {readyForDischarge.length > 0 && (
            <span
              style={{ position: "relative", left: "-8px" }}
              className="badge badge-pill badge-danger"
            >
              {readyForDischarge.length}
            </span>
          )}
        </button>
      )}
      {/* Notifications for Head Nurse */}
      {user && user.accessLevel === 2 && (
        <button
          style={{ borderRadius: 50 }}
          className="btn mt-3"
          data-triger="focus"
          data-toggle="popover"
          data-placement="bottom"
          title="Notifications"
          data-content={popoverContentHeadNurce.join("")}
        >
          <FontAwesomeIcon style={{ fontSize: 35 }} icon={faBell} />
          {patientsWaitingLetterApprovalHeadNurce.length > 0 && (
            <span
              style={{ position: "relative", left: "-8px" }}
              className="badge badge-pill badge-danger"
            >
              {patientsWaitingLetterApprovalHeadNurce.length}
            </span>
          )}
        </button>
      )}
      {/* Notifications for Surgeon */}
      {user && user.accessLevel === 3 && (
        <button
          style={{ borderRadius: 50 }}
          className="btn mt-3"
          data-triger="focus"
          data-toggle="popover"
          data-placement="bottom"
          title="Notifications"
          data-content={popoverContentSurgeon.join("")}
        >
          <FontAwesomeIcon style={{ fontSize: 35 }} icon={faBell} />
          {patientsWaitingLetterApprovalSurgeon.length > 0 && (
            <span
              style={{ position: "relative", left: "-8px" }}
              className="badge badge-pill badge-danger"
            >
              {patientsWaitingLetterApprovalSurgeon.length}
            </span>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export default Notifications;
