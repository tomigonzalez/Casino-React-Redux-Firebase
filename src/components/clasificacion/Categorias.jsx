import React from "react";
import { Categories } from "../../data/Categories";
import CategoriasNombre from "./CategoriasNombre";
import { ContenedorCategorias } from "./CategoriasStyle";

const Categorias = () => {
  return (
    <>
      <ContenedorCategorias>
        {Categories.map((producto) => {
          return <CategoriasNombre key={producto.id} {...producto} />;
        })}
      </ContenedorCategorias>
    </>
  );
};

export default Categorias;
