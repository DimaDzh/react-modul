import React from "react";
import { Link } from "react-router-dom";
import SingUp from "../../components/Header/SingUp/SingUp";
import "./style.scss";
type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="registration__section">
      <h2>Зарегестрироваться</h2>

      <SingUp />
      <p>
        Already have acc? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
