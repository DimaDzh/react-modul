import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import { selectCart, removeAll } from "../../store/slices/useCartSlice";
import ApplyButton from "./assets/Buttons/ApplyButton";
import ClearButton from "./assets/Buttons/ClearButton";
import CartItem from "./CartItem";

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
    <div className="cart-order__section">
      <table className="{cart-order__table}">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Стоимость</th>
            <th>Количество</th>
            <th>Общая стоимость</th>
          </tr>
        </thead>
        <tbody>
          {items.map((obj) => (
            <CartItem key={obj.id} obj={obj} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <div className="{cart-order__footer}">
                <ClearButton handleClick={handleRemoveAll}>
                  Очистить корзину
                </ClearButton>
                <div className="{cart-order__order}">
                  <div className="{cart-order__total}">
                    <h4>Стоимость</h4>
                    <div>
                      <span>Количество</span>
                      <span>{totalAmount} шт.</span>
                    </div>
                    <div>
                      <span>Доставка</span>
                      <span>{deliveryPrice} uah</span>
                    </div>
                    <div>
                      <span>Итого</span>
                      <span>{totalPrice + deliveryPrice} uah</span>
                    </div>
                  </div>
                  <ApplyButton>Отправить заказ</ApplyButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartOrder;
