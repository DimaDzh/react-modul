import React, { FC } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className="main">{children}</div>;
};

export default MainContainer;
