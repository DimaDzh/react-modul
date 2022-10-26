import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import { selectCart, removeAll } from "../../store/slices/useCartSlice";
import ApplyButton from "./assets/Buttons/ApplyButton";
import ClearButton from "./assets/Buttons/ClearButton";
import CartItem from "./CartItem";

import { Row, Col, Divider } from "antd";
import { mainColor1 } from "../variables/mainColors/mainColor1";

const CartOrder: React.FC = () => {
  const { items, totalPrice, totalAmount } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const deliveryPrice: 0 | 100 = totalPrice > 1200 ? 0 : 100;

  const handleRemoveAll = () => {
    if (window.confirm("Подтвердить удаление товаров?")) {
      dispatch(removeAll());
    }
  };

  return (
    <div className="card-order__section">
      <h3>
        Товары в <span style={mainColor1}>корзине</span>
      </h3>
      <Divider />
      <div className="cart-order__body">
        <Row>
          {items.map((obj) => (
            <Col
              xs={{ span: 12, offset: 1 }}
              md={{ span: 8, offset: 0 }}
              lg={{ span: 4, offset: 0 }}
            >
              <CartItem key={obj.id} obj={obj} />
            </Col>
          ))}
        </Row>
      </div>
      <Divider />
      <div>
        <span>Количество товара </span>
        <span>{totalAmount} шт.</span>
      </div>
      <Divider />
      <div>
        <span>Доставка </span>
        <span>{deliveryPrice} UAH</span>
      </div>
      <Divider />
      <div>
        <span>Итого </span>
        <span>{totalPrice + deliveryPrice} UAH</span>
      </div>
      <Divider />

      <ApplyButton>Отправить заказ</ApplyButton>
      <Divider />
      <ClearButton handleClick={handleRemoveAll}>Очистить корзину</ClearButton>
    </div>
  );
};

export default CartOrder;
