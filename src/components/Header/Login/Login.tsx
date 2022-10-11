import React, { FC } from "react";
import { Button } from "antd";
import "./login.scss";

const Login: FC = () => {
  return (
    <Button type="link" className="login">
      Войти
    </Button>
  );
};

export default Login;
