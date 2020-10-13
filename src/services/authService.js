import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import axios from "axios";

const {REACT_APP_APIURL: baseURL} = process.env;
console.log(baseURL)

export const authService = async ({ email, password }) => {
  try {
    const result = await axios.post(baseURL + "/auth", {
      email,
      password,
    });
    localStorage.setItem("jwt", result.data);
    window.location.replace("/patients");
  } catch (error) {
    toast.error("User not found!");
  }
};

export const getUser = () => {
  const getToken = () => localStorage.getItem("jwt");
  const token = getToken();
  if (token) {
    return jwt_decode(token);
  }
};
