import React, { useEffect } from "react";
import { LinkContainerStyled } from "../NavbarStyle";
import { BsCart } from "./CartStyle";
import { useDispatch, useSelector } from "react-redux";
import { toggleOtherMenuHidden } from "../../../redux/cart/cart-action";

const Cart = ({ invalid }) => {
  const { hiddenMenu } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleOtherMenuHidden());
    }
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <LinkContainerStyled>
      <BsCart
        invalid={invalid}
        onClick={() => dispatch(toggleOtherMenuHidden())}
      ></BsCart>
    </LinkContainerStyled>
  );
};

export default Cart;
