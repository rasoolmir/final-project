import Cart from "../shopping-cart/cart.component";

import styles from "./header.module.css";

export default function HeaderComponent() {
  return (
    <div className={styles.header}>
      <header>
        <Cart />
      </header>
    </div>
  );
}
