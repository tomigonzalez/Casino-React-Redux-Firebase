import React, { useEffect } from "react";
import CardProducto from "./CardProducto";
import { ProductosContainer } from "./CardsProductosStyle";
import { useSelector } from "react-redux";

const CardsProductos = () => {
  let machine = useSelector((state) => state.machine.machine);
  console.log(machine);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    console.log(selectedCategory);
    machine = machine.filter(
      (producto) => producto.category === selectedCategory
    );
  }

  useEffect(() => console.log(machine), [machine]);

  return (
    <>
      <ProductosContainer>
        {machine.map((producto) => {
          return <CardProducto key={producto.id} {...producto} />;
        })}
      </ProductosContainer>
    </>
  );
};

export default CardsProductos;
