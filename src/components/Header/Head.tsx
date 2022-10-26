import React from "react";
import "./header.scss";
import { MenuList } from "./MenuList/MenuList";
import Logo from "./Logo/Logo";
import BackCallButton from "./BackCallButton/BackCallButton";
import CardButton from "./Card/CardButton";
import PhoneCall from "./BackCallButton/PhoneCall";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Head: React.FC = () => {
  const { isAuth, email } = useAuth();

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
        <p className="bage__span">
          Доставка пасты <span>Киев</span>
        </p>
        <BackCallButton />
        <PhoneCall />
      </div>

      <div className="down__header">
        <MenuList>
          <ul className="list">
            <li className="list__item">Menu</li>
            <li className="list__item">Супы</li>
            <li className="list__item">Антипасты</li>
            <li className="list__item">Напитки</li>
            <li className="list__item">Десерты</li>
            <li className="list__item">
              <Link to="/actions" style={{ color: "#000" }}>
                Акции!
              </Link>
            </li>
            <li className="list__item">Контакты</li>
          </ul>
        </MenuList>

        {!isAuth ? (
          <Link to="/login" className="sign__btn">
            Войти
          </Link>
        ) : (
          <button className="account__btn">
            <Link to="/account">Аккаунт</Link>
          </button>
        )}

        <CardButton />
      </div>
    </div>
  );
};

export default Head;
