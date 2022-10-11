import React from "react";

interface FeadBackButtonProps {
  children?: React.Component | any;
  style?: React.CSSProperties;
  link?: string;
}

const FeadBackButton: React.FC<FeadBackButtonProps> = ({
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
