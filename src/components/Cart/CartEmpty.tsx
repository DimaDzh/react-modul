import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "./assets/images/empty-cart.png";
import { Button } from "antd";
import CustomButton from "../CustomisedBtn/CustButton";
import { custBtn } from "../variables/mainColors/custBtn";
import "./cartStyle.scss";
const CartEmpty: React.FC = () => {
  return (
    <div className="empty-cart__section">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вы еще ничего не добавили в корзину.
        <br />
        Для заказа, вернитесь на главную страницу.
      </p>
      <img src={emptyCartImg} alt="Empty cart" className="image" />
      <Link to={"/"}>
        <CustomButton styles={custBtn}>Вернуться на главную</CustomButton>
      </Link>
    </div>
  );
};

export default CartEmpty;
