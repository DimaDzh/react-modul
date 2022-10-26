import React, { FC } from "react";
import { mainColor1 } from "../../variables/mainColors/mainColor1";
import "./backcallBtn.scss";

const PhoneCall: FC = () => {
  return (
    <div className="phone">
      <span className="phone__call">
        <a href="tel:+380999229922" style={mainColor1}>
          +380999229922
        </a>
      </span>
    </div>
  );
};

export default PhoneCall;
