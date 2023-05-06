import React from "react";
import Button from "../UI/button/Button";
import {
  CardId,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  Cards,
} from "./MaxWinStyle";

const CardWin = ({ title, img, price, id }) => {
  return (
    <Cards>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardId>{id}</CardId>
        <CardPrice>{price}</CardPrice>
        <Button></Button>
      </CardText>
    </Cards>
  );
};

export default CardWin;
