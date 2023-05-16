import React from "react";
import { secciones } from "../../data/Clases";
import { ContentSection } from "./SeccionesStyle";
import Seccion from "./Seccion";

const Secciones = () => {
  return (
    <ContentSection>
      {secciones.map((producto) => {
        return <Seccion key={producto.id} {...producto} />;
      })}
    </ContentSection>
  );
};

export default Secciones;
