import { Button } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { selectCart } from "../../../store/slices/useCartSlice";

const CardButton: FC = () => {
  const { totalPrice, totalAmount } = useAppSelector(selectCart);

  return (
    <Button type="primary" shape="round" className="card__btn">
      {totalAmount > 0 ? (
        <Link to="/cart">Корзина | {totalAmount}</Link>
      ) : (
        <Link to="/cart">Корзина</Link>
      )}
    </Button>
  );
};

export default CardButton;
