import React from "react";

import {
  ButtonRegisterPosition,
  ContainerImg,
  Img,
  SliderConst,
} from "./SliderPicStyle";
import Button from "../UI/button/Button";

const SliderPic = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // mostrar 1 elemento a la vez
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SliderConst {...settings}>
      <ContainerImg>
        <Img src="img/1.png" alt="deposit" />
        <ButtonRegisterPosition>
          <Button secondary>DEPOSIT</Button>
        </ButtonRegisterPosition>
      </ContainerImg>

      <ContainerImg>
        <Img src="img/2.png" alt="deposit" />
        <ButtonRegisterPosition>
          <Button secondary>DEPOSIT</Button>
        </ButtonRegisterPosition>
      </ContainerImg>

      <ContainerImg>
        <Img src="img/3.png" alt="deposit" />

        <ButtonRegisterPosition>
          <Button secondary>DEPOSIT</Button>
        </ButtonRegisterPosition>
      </ContainerImg>
    </SliderConst>
  );
};

export default SliderPic;
