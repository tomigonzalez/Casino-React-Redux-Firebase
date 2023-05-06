import React from "react";
import SliderPic from "../../components/slider/SliderPic";
import { ContenedorHome } from "./HomeStyle";
import MaxWin from "../../components/maxWin/MaxWin";
import Titles from "../../components/UI/title/Titles";

const Home = () => {
  return (
    <ContenedorHome>
      <SliderPic />
      <Titles>
        <span>BIG</span> WINS
      </Titles>
      <MaxWin />
    </ContenedorHome>
  );
};

export default Home;
