import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Header/Login/Login";

import "../../components/assets/formStyle.scss";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="form__section">
      <h2>Login</h2>
      <Login />
      <p>
        Or <Link to="/register">Rigiseter</Link>
      </p>
    </div>
  );
};

export default LoginPage;
