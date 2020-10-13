import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "users";

export const RedisterService = async ({ email, password }) => {
  const user = { email, password };
  console.log(user);
  const response = await http.post(apiEndpoint, user);
  console.log(response);
};
