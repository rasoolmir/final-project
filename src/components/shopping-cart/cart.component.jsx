import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import CartItemComponent from "./cart-item.component";
import MingcuteShoppingCart2Line from "../../assets/icons/MingcuteShoppingCart2Line";

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  const CartSlice = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <>
      <Button onClick={() => toggleModal(0, true)}>
        ({CartSlice})<MingcuteShoppingCart2Line />
      </Button>
      <Modal
        open={isModalOpen[0]}
        onCancel={() => toggleModal(0, false)}
        footer=""
      >
        <CartItemComponent />
      </Modal>
    </>
  );
}
