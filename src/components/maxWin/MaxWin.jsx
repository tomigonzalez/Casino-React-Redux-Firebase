import React from "react";
import { CardsContainer } from "./MaxWinStyle";
import { BigWin } from "../../data/BigWin";
import CardWin from "./CardWin";

const MaxWin = () => {
  return (
    <CardsContainer gridLength={BigWin.length}>
      {BigWin.map((recomendado) => (
        <CardWin key={recomendado.id} {...recomendado} />
      ))}
    </CardsContainer>
  );
};

export default MaxWin;
