import React, { FC } from "react";
import { Card } from "antd";
import { CardProps } from "antd";

interface DeliveryCardProps extends CardProps {
  children?: React.ReactNode | any;
  styles?: React.CSSProperties;
  icon?: any;
}

const deliveryCardStyle = {
  background: "#FFFFFF",
  boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.03)",
  borderRadius: "14px",
  width: "255px",
  height: "104px",
  marginBottom: "10px",
};

const DeliveryCard: FC<DeliveryCardProps> = ({ icon, children, styles }) => {
  return (
    <div className="del__card">
      <div className="badge">{icon}</div>
      <div className="card__body">
        <p>Card content</p>
        {children}
      </div>
    </div>
  );
};

export default DeliveryCard;
