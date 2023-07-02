import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContButtons,
  ModalContainerStyleds,
  ProductsCart,
} from "./ModalCartStyle";

import Button from "../../UI/button/Button";
import { clearCart, delFromCart } from "../../../redux/cart/cart-action";
import ProductItem from "./ProductItem";
import Titles from "../../UI/title/Titles";
import useTotal from "../../../hooks/useTotal";

const ModalCart = () => {
  const { hiddenMenu, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useTotal();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyleds
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <Titles>
            <span>CART</span>
          </Titles>

          <ProductsCart>
            {cart.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
                delOneFromCart={() => dispatch(delFromCart(item.id))}
                delAllFromCart={() => dispatch(delFromCart(item.id, true))}
              />
            ))}
          </ProductsCart>
          <p>Total USD: {total}</p>
          <ContButtons>
            <Button secondary={true}>ADD</Button>
            <Button secondary={false} onClick={() => dispatch(clearCart())}>
              DELETE
            </Button>
          </ContButtons>
        </ModalContainerStyleds>
      )}
    </AnimatePresence>
  );
};

export default ModalCart;
