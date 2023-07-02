import React from "react";
import { ContButton, CountentCoupons, ImgDeposito } from "./CouponsStyle";
import Button from "../UI/button/Button";
import Titles from "../UI/title/Titles";

const CouponsNombre = ({ data, addToCart }) => {
  let { id, img, category } = data;
  return (
    <CountentCoupons>
      <ImgDeposito src={img} alt={category} />
      <ContButton>
        <Titles>{category}</Titles>
        <Button onClick={() => addToCart(id)}>DEPOSIT</Button>
      </ContButton>
    </CountentCoupons>
  );
};

export default CouponsNombre;
