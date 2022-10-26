import React, { CSSProperties } from "react";
import { TiMinus } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { IProducts, removeItem } from "../../../../store/slices/useCartSlice";
import { custBtn } from "../../../variables/mainColors/custBtn";

interface CartButtonMinusType {
  product: IProducts | string | number | any;
  amount: number | any;
  disabled?: boolean;
}

const CartButtonMinus: React.FC<CartButtonMinusType> = React.memo(
  ({ product, amount, disabled }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
      dispatch(removeItem(product.id));
    };

    if (disabled === undefined) disabled = true;

    return (
      <button
        style={custBtn}
        disabled={disabled && amount === 1}
        onClick={() => handleRemoveItem()}
      >
        <TiMinus />
      </button>
    );
  }
);

export default CartButtonMinus;
