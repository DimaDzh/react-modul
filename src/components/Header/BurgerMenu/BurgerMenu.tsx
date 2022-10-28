import React, { FC, ReactElement } from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.scss";

interface IToggleMenu {
  isOpen?: boolean;
}

interface IToBurgerMenu {
  children: JSX.Element | ReactElement;
}

const toggleMenu = ({ isOpen }: IToggleMenu) => {
  const menuWrap: any = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = ({ children }: IToBurgerMenu) => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      {children}
    </Menu>
  );
};

export default BurgerMenu;
