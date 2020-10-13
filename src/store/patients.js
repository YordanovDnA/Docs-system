import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";
import axios from "axios";
import _ from "lodash";
import { toast } from "react-toastify";

const slice = createSlice({
  name: "patients",
  initialState: {
    list: [],
    loading: true,
    lastFetch: null,
  },
  reducers: {
    patientsRequested: (patients, action) => {
      patients.loading = true;
    },

    patientsReceived: (patients, action) => {
      patients.list = action.payload;
      patients.loading = false;
      patients.lastFetch = Date.now();
    },

    patientsRequestFailed: (patients, action) => {
      patients.loading = false;
    },

    patientAdded: (patients, action) => {
      patients.list.push(action.payload);
    },

    patientDischargingLettterAdded: (patients, action) => {
      const { id, discharging } = action.payload;
      const index = patients.list.findIndex((patient) => patient.id === id);
      if (index > -1) {
        patients.list[index].discharging = discharging;
      }
    },

    letterApprovedByHeadNurce: (patients, action) => {
      const { id, discharging } = action.payload;
      const index = patients.list.findIndex((patient) => patient.id === id);
      if (index > -1) {
        patients.list[index].discharging = discharging;
      }
    },

    letterApprovedBySurgeon: (patients, action) => {
      const { id, discharging } = action.payload;
      const index = patients.list.findIndex((patient) => patient.id === id);
      if (index > -1) {
        patients.list[index].discharging = discharging;
      }
    },

    patientDischarged: (patients, action) => {
      const index = patients.list.findIndex(
        (patient) => patient.id === action.payload.id
      );
      if (index > -1) {
        patients.list[index].discharging.discharged = true;
        toast.success(`Patient ${patients.list[index].name.first} was 
        discharged successfully`);
      } else
        toast.error(
          "Ups, are you sude that you didn't discharge this patient already?"
        );
    },

    patientRemoved: (patients, action) => {
      const index = patients.list.findIndex(
        (patient) => patient.id === action.payload.id
      );
      if (index > -1) {
        patients.list.splice(index, 1);
      }
    },
  },
});

export const {
  patientsRequested,
  patientsReceived,
  patientsRequestFailed,
  patientAdded,
  patientDischargingLettterAdded,
  letterApprovedByHeadNurce,
  letterApprovedBySurgeon,
  patientDischarged,
  patientRemoved,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/patients";

export const loadPatients = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.patients;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10)
    return dispatch(async () => {
      const result = await axios.get("http://localhost:9002/api" + url);
      const patients = getState().entities.patients.list;
      if (!_.isEqual(patients, result.data)) {
        dispatch(
          apiCallBegan({
            url,
            onStart: patientsRequested.type,
            onSuccess: patientsReceived.type,
            onError: patientsRequestFailed.type,
          })
        );
      }
    });
  return dispatch(
    apiCallBegan({
      url,
      onStart: patientsRequested.type,
      onSuccess: patientsReceived.type,
      onError: patientsRequestFailed.type,
    })
  );
};

export const addPatient = (patient) =>
  apiCallBegan({
    url,
    method: "post",
    data: patient,
    onSuccess: patientAdded.type,
  });

export const addDischargingLetter = (id, discharging) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "put",
    data: { discharging },
    onSuccess: patientDischargingLettterAdded.type,
  });

export const headNurceApprove = (id, discharging, signedBy) =>
  apiCallBegan({
    url: `${url}/${id}/headNurseApproved`,
    method: "patch",
    data: { discharging, signedBy },
    onSuccess: letterApprovedByHeadNurce.type,
  });

export const surgeonApprove = (id, discharging, signedBy) =>
  apiCallBegan({
    url: `${url}/${id}/surgeonApproved`,
    method: "patch",
    data: { discharging, signedBy },
    onSuccess: letterApprovedBySurgeon.type,
  });

export const dischargePatient = (id) =>
  apiCallBegan({
    url: `${url}/${id}/discharge`,
    method: "patch",
    onSuccess: patientDischarged.type,
  });

export const removePatient = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: patientRemoved.type,
  });

// Selector

// Memoization
// bugs => get unresolved bugs from the cache

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.list.filter((bug) => !bug.resolved)
);
