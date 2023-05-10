import React from "react";
import { products } from "../../data/Machine";
import CardProducto from "./CardProducto";

import { ProductosContainer } from "./CardsProductosStyle";

const CardsProductos = () => {
  return (
    <>
      <ProductosContainer>
        {products.map((producto) => {
          return <CardProducto key={producto.id} {...producto} />;
        })}
      </ProductosContainer>
    </>
  );
};

export default CardsProductos;
