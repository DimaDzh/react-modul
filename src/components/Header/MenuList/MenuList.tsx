import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MenuItem from "./MenuItem";

interface IMenuListProps {
  title?: string;
  children?: JSX.Element | ReactElement;
}

const menuListData = [
  "Меню",
  "Супы",
  "Антипасты",
  "Напитки",
  "Десерты",
  <Link to="/actions" style={{ color: "#000" }}>
    Акции
  </Link>,
  "Бакалея",

  "Контакты",
];

export const MenuList: FC<IMenuListProps> = ({ title, children }) => {
  const [size, setSize] = useState<any>();

  useEffect(() => {
    setSize(document.documentElement.scrollWidth);
    console.log(size);
  }, [size]);

  return (
    <>
      {size < 900 ? (
        <BurgerMenu>
          <MenuItem itemData={menuListData} />
        </BurgerMenu>
      ) : (
        <MenuItem itemData={menuListData} />
      )}
    </>
  );
};

export default MenuList;
function useEfect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
