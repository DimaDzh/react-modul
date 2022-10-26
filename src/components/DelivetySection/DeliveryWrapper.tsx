import React from "react";
import { mainColor1 } from "../variables/mainColors/mainColor1";
import { DeliverIcon } from "./assets/DeliverIcon.1";
import {
  CheckIcon,
  DelivIcon,
  DelivTimeIcon,
  PayIcon,
} from "./assets/svgIcons/CreateSvgIcons";

import CityMap from "./CityMap";
import DeliveryCard from "./DeliveryCard";
import "./styles.scss";

interface DeliveryWrapperProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  title?: string;
}

// const BadgeIcons = {
//   deliv: DelivIcon,
//   delivTime: DelivTimeIcon,
//   check: CheckIcon,
//   pay: PayIcon,
// };

export default function DeliveryWrapper({
  children,
  styles,
  title,
}: DeliveryWrapperProps) {
  return (
    <>
      {" "}
      <div className="delivery__section">
        <h3 style={mainColor1}>{title}</h3>
        <div className="cards__section"></div>
        <CityMap />
      </div>
    </>
  );
}
