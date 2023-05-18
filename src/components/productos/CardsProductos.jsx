import React, { useEffect, useState } from "react";
import CardProducto from "./CardProducto";
import {
  ButtonContPosition,
  ButtonContainerStyled,
  ProductosContainer,
} from "./CardsProductosStyle";
import { useSelector } from "react-redux";
import { INITIAL_LIMIT } from "../../data/Constante";
import Button from "../UI/button/Button";
import { TotalProducts } from "../../data/Machine";

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const machine = useSelector((state) => state.machine.machine);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  let productsToRender = [];

  if (selectedCategory) {
    // Si hay una categoría seleccionada distinta de "Section", se filtran los productos de machine
    productsToRender = machine.filter(
      (producto) => producto.category === selectedCategory
    );
  } else {
    // Si no hay categoría seleccionada, se renderizan todos los productos de machine
    productsToRender = machine;
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [productsToRender]);

  return (
    <>
      <ProductosContainer>
        {productsToRender.map((producto) => {
          if (selectedCategory || producto.id < limit) {
            return <CardProducto key={producto.id} {...producto} />;
          }
          return null;
        })}
      </ProductosContainer>

      {selectedCategory === null && (
        <ButtonContPosition>
          <ButtonContainerStyled>
            <Button
              width={100}
              disabled={INITIAL_LIMIT === limit}
              onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            >
              ver menos
            </Button>
            <Button
              secondary="true"
              width={100}
              disabled={TotalProducts <= limit}
              onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            >
              ver mas
            </Button>
          </ButtonContainerStyled>
        </ButtonContPosition>
      )}
    </>
  );
};

export default CardsProductos;
