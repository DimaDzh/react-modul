import React from "react";
import "./header.scss";
import { Col, Divider, Row } from "antd";
import { MenuList } from "./MenuList/MenuList";
import Logo from "./Logo/Logo";
import Login from "./Login/Login";
import BackCallButton from "./BackCallButton/BackCallButton";
import CardButton from "./Card/CardButton";
import { mainColor1 } from "../variables/mainColors/mainColor1";
import PhoneCall from "./BackCallButton/PhoneCall";
import { Routes, Route, Link } from "react-router-dom";

const Head: React.FC = () => {
  const menuListData = [
    "Меню",
    "Супы",
    "Антипасты",
    "Напитки",
    "Десерты",
    "Бакалея",
    "Контакты",
  ];

  return (
    <div className="header">
      <div className="top__header">
        <Logo />
        <p>
          Доставка пасты <span>Киев</span>
        </p>
        <BackCallButton />
        <PhoneCall />
      </div>

      <div className="down__header">
        <MenuList>
          <ul className="menu__list">
            <li className="list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="list__item">Menu</li>
            <li className="list__item">Супы</li>
            <li className="list__item">Антипасты</li>
            <li className="list__item">Напитки</li>
            <li className="list__item">Десерты</li>
            <li className="list__item">
              <Link to="/actions">Акции!</Link>
            </li>
            <li className="list__item">Контакты</li>
          </ul>
        </MenuList>

        <Login />
        <CardButton />
      </div>
    </div>
  );
};

export default Head;
