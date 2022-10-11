import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import LogoSvg from "./LogoSvg";
import "./logoStyle.scss";

const Logo: React.FC = () => {
  return (
    <>
      <div className="logo__section">
        <LogoSvg />
        <div className="logo__title">
          <p>YABAO</p>
          <span>Дух китайской еды</span>
        </div>
      </div>
    </>
  );
};

export default Logo;
