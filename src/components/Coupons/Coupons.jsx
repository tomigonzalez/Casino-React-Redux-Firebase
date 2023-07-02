import React, { useEffect } from "react";
import { ContGeneral, ContenedorCoupons } from "./CouponsStyle";
import { useDispatch, useSelector } from "react-redux";
import CouponsNombre from "./CouponsNombre";
import { addToCart } from "../../redux/cart/cart-action";

import {
  auth,
  getCartItems,
  handleAddToCart,
} from "../../firebase/firebase-utils";

const Coupons = () => {
  const coup = useSelector((state) => state.coupons.coupons);
  const dispatch = useDispatch();

  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (userId) {
      // Obtener los productos del carrito desde Firestore al iniciar sesión
      getCartItems(userId).then((items) => {
        dispatch(addToCart(items));
      });
    }
  }, [dispatch, userId]);

  const handleAddToCartClick = (product) => {
    let userId = auth.currentUser.uid;
    handleAddToCart(userId, product);
  };

  return (
    <ContGeneral>
      <ContenedorCoupons>
        {coup.map((producto) => (
          <CouponsNombre
            key={producto.id}
            data={producto}
            addToCart={() => {
              handleAddToCartClick(producto);
              dispatch(addToCart(producto.id));
            }}
          />
        ))}
      </ContenedorCoupons>
    </ContGeneral>
  );
};

export default Coupons;
