import React from "react";
import SliderPic from "../../components/slider/SliderPic";
import { ContenedorHome } from "./HomeStyle";
import MaxWin from "../../components/maxWin/MaxWin";
import Titles from "../../components/UI/title/Titles";
import CardsProductos from "../../components/productos/CardsProductos";
import Categorias from "../../components/clasificacion/Categorias";
import Secciones from "../../components/secciones/Secciones";

const Home = () => {
  return (
    <ContenedorHome>
      <SliderPic />
      <Titles>
        <span>BIG</span> WINS
      </Titles>
      <MaxWin />

      {/* Categorias Section */}
      <Categorias />
      {/* Populares Section*/}
      <CardsProductos />
      {/*secciones*/}
      <Secciones />
    </ContenedorHome>
  );
};

export default Home;
