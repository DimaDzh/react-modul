import React from "react";
import { IoClose } from "react-icons/io5";
import { removeItemById } from "../../store/slices/useCartSlice";
// import { useAppDispatch } from "../../redux/hooks";

import "./cartStyle.scss";
import CartButtonMinus from "./assets/Buttons/CartButtonMinus";
import CartButtonPlus from "./assets/Buttons/CartButtonPlus";
import { IProducts } from "../../store/slices/useCartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { Button } from "antd";

export type CartItemProps = {
  obj: IProducts | any;
};

const CartItem: React.FC<CartItemProps> = ({ obj }) => {
  const dispatch = useAppDispatch();

  const handleRemoveItemById = () => {
    dispatch(removeItemById(obj.id));
  };

  return (
    <div className="cart-item__section">
      <div className="cart-item__product">
        <img height="100" src={obj.image} alt="productImg" />
        <h5>{obj.title}</h5>
      </div>
      <div className="cart-item__price">{obj.price} UAH</div>
      <div className="cart-item__amount">
        <div>
          <CartButtonMinus product={obj} amount={obj.amount} />
          {obj.amount}
          <CartButtonPlus product={obj} amount={obj.amount} />
        </div>
        <Button shape="round" danger>
          {" "}
          <IoClose onClick={() => handleRemoveItemById()} />
        </Button>
      </div>
      <div className="cart-item__total">{obj.price} UAh</div>
    </div>
  );
};

export default CartItem;
