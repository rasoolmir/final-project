import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadMore } from "../../services/redux/slice/shop-slice";
import { addToCart } from "../../services/redux/slice/cart-slice";
import Loading from "../../components/Loading.component";
import styles from "./shop.module.css";

export default function ShopComponent() {
  const dispatch = useDispatch();
  const { items, loading, visibleItemCount } = useSelector(
    (state) => state.shop,
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <ul className={styles.shop}>
        {items.slice(0, visibleItemCount).map((product) => (
          <li key={product.id}>
            <div className={styles["product-image"]}>
              <img src={product.image} alt="product image" />
            </div>
            <div className={styles["product-details"]}>
              <span>{product.category}</span>
              <h2>{product.title}</h2>
              <span>{product.price}$</span>
              <button onClick={() => handleAddToCart(product)}>
                افزودن به سبد خرید
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLoadMore}
        disabled={loading}
        className={styles["load-more-btn"]}
      >
        مشاهده بیشتر
      </button>
    </div>
  );
}
