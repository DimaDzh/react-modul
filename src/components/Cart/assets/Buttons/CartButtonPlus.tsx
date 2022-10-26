import React from "react";
import { TiPlus } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem, IProducts } from "../../../../store/slices/useCartSlice";
import { custBtn } from "../../../variables/mainColors/custBtn";

interface CartButtonPlusType {
  product: IProducts;
  amount: number | any;
}

const CartButtonPlus: React.FC<CartButtonPlusType> = React.memo(
  ({ product, amount }) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
      dispatch(addItem(product));
    };
    return (
      <button
        disabled={amount === 99}
        onClick={() => handleAddItem()}
        style={custBtn}
      >
        <TiPlus />
      </button>
    );
  }
);

export default CartButtonPlus;
