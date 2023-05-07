import React from "react";
import { CardsContainer, SliderBigWin } from "./MaxWinStyle";
import { BigWin } from "../../data/BigWin";
import CardWin from "./CardWin";

const MaxWin = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <CardsContainer gridLength={BigWin.length}>
      <SliderBigWin {...settings}>
        {BigWin.map((recomendado) => (
          <CardWin key={recomendado.id} {...recomendado} />
        ))}
      </SliderBigWin>
    </CardsContainer>
  );
};

export default MaxWin;
