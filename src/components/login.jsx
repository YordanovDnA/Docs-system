import React from "react";
import LoginForm from "./loginForm";
import TableUsers from "./tableUsers";

const Login = () => {
  return (
    <React.Fragment>
      <LoginForm />
      <TableUsers />
    </React.Fragment>
  );
};

export default Login;
