import React from "react";
import { IoClose } from "react-icons/io5";
import { removeItemById } from "../../store/slices/useCartSlice";
// import { useAppDispatch } from "../../redux/hooks";

import "./cartStyle.scss";
import CartButtonMinus from "./assets/Buttons/CartButtonMinus";
import CartButtonPlus from "./assets/Buttons/CartButtonPlus";
import { IProducts } from "../../store/slices/useCartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

export type CartItemProps = {
  obj: IProducts | any;
};

const CartItem: React.FC<CartItemProps> = ({ obj }) => {
  const dispatch = useAppDispatch();

  const handleRemoveItemById = () => {
    dispatch(removeItemById(obj.id));
  };

  return (
    <div>
      <tr className="cart-item__section">
        <td className="cart-item__product">
          <IoClose onClick={() => handleRemoveItemById()} />
          <img height="100" src={obj.image} alt="productImg" />
          <h5>{obj.title}</h5>
        </td>
        <td className="cart-item__price">{obj.price} UAH</td>
        <td className="cart-item__amount">
          <div>
            <CartButtonMinus product={obj} amount={obj.amount} />
            {obj.amount}
            <CartButtonPlus product={obj} amount={obj.amount} />
          </div>
        </td>
        <td className="cart-item__total">{obj.price} UAh</td>
      </tr>
    </div>
  );
};

export default CartItem;
