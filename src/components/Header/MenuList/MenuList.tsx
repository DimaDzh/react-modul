import React, { FC, ReactElement } from "react";

interface IMenuListProps {
  title?: string;
  children?: JSX.Element | ReactElement;
}

export const MenuList: FC<IMenuListProps> = ({ title, children }) => {
  return <div className="menu__list">{children}</div>;
};

export default MenuList;
