import React, { FC } from "react";

interface FeadBackButtonProps {
  children?: React.Component | any;
  style?: React.CSSProperties;
  link?: string;
}

const FeadBackButton: FC<FeadBackButtonProps> = ({
  children,

  link,
}) => {
  return (
    <div className="feedback__btn">
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default FeadBackButton;
