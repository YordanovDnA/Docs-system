import { combineReducers } from "redux";
import usersReducer from "./users";
import patientsReducer from "./patients";

export default combineReducers({
  users: usersReducer,
  patients: patientsReducer,
});
