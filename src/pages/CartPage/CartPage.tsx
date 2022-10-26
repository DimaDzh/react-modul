import React, { useState } from "react";
import CartEmpty from "../../components/Cart/CartEmpty";
import CartItem from "../../components/Cart/CartItem";
import { selectCart } from "../../store/slices/useCartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useSelector } from "react-redux";
import CartOrder from "../../components/Cart/CartOrder";

const CartPage: React.FC = () => {
  const { items }: any = useSelector<any>((state) => state.cart);

  return (
    <div className="content">
      {items.length > 0 ? <CartOrder /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;
