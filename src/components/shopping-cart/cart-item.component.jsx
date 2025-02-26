import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../services/redux/slice/cart-slice";

import styles from "./cart-item.module.css";

export default function CartItemComponent() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (value, item) => value + (item.price || 0) * (item.quantity ?? 1),
    0,
  );

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div>
      {cartItems.length === 0 && <p>محصولی در سبد خرید وجود ندارد.</p>}
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price || 0} $</p>
            <div className={styles["cart-item-actions"]}>
              <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
              <span>{item.quantity || 0}</span>
              <button onClick={() => handleAddToCart(item)}>+</button>
            </div>
          </li>
        ))}

        {cartItems.length > 0 && (
          <p>
            مجموع: $ <strong>{totalPrice}</strong>
          </p>
        )}
      </ul>
    </div>
  );
}
