import React, { FC } from "react";
import { BackTop } from "antd";

interface IBackToTopBtnProps {}

const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "rgba(255, 46, 101, 1)",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const BackToTopBtn: FC<IBackToTopBtnProps> = () => {
  return (
    <div style={{ height: "600vh", padding: 8 }}>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
};

export default BackToTopBtn;
