import { Button } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { IProducts, addItem } from "../../../../store/slices/useCartSlice";
import { custBtn } from "../../../variables/mainColors/custBtn";
import CartButtonMinus from "./CartButtonMinus";
import CartButtonPlus from "./CartButtonPlus";

type AddToCartButtonProps = {
  product: IProducts;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    state.cart.items.find((obj: IProducts) => obj.id === product.id)
  );
  let amount = !cartItem ? 0 : cartItem.amount;

  const handleAddProduct = () => {
    dispatch(addItem(product));
  };

  return amount > 0 ? (
    <div className="">
      <CartButtonMinus product={product} amount={amount} disabled={false} />
      <span>{amount}</span>
      <CartButtonPlus product={product} amount={amount} />
    </div>
  ) : (
    <Button onClick={() => handleAddProduct()} style={custBtn}>
      <span>В корзину</span>
      {/* <span>{amount === 0 ? "+" : "x" + amount}</span> */}
    </Button>
  );
};

export default AddToCartButton;
