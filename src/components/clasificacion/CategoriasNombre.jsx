import React from "react";
import { Icono, Nombre, Posicion } from "./CategoriasStyle";

const CategoriasNombre = ({ img, title, id, section }) => {
  return (
    <>
      <Posicion>
        <Icono>{img}</Icono>
        <Nombre>{title}</Nombre>
      </Posicion>
    </>
  );
};

export default CategoriasNombre;
