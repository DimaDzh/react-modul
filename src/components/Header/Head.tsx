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
        <MenuList />

        {!isAuth ? (
          <Link to="/login" className="sign__btn login">
            Войти
          </Link>
        ) : (
          <button className="account__btn login">
            <Link to="/account">Аккаунт</Link>
          </button>
        )}

        <CardButton />
      </div>
    </div>
  );
};

export default Head;
