import React, { FC } from "react";
import { mainColor1 } from "../variables/mainColors/mainColor1";
import FormDisabledDemo from "./AccForm";
import { Link } from "react-router-dom";

import "./style.scss";

interface iAccountProps {}

const Account: FC<iAccountProps> = (props) => {
  return (
    <div className="account__section">
      <div className="bonus__section">
        <h2 style={mainColor1}></h2>
        <div className="bonus__box">
          <img src="./assets/bonus_img1.png" alt="bonus" />
          <p>Бонусы появятся здесь после заказа</p>
        </div>
        <div className="actions">
          <Link to="/actions">Все акции</Link>
        </div>
      </div>
      <div className="personal-data__section">
        <FormDisabledDemo />
      </div>
    </div>
  );
};

export default Account;
