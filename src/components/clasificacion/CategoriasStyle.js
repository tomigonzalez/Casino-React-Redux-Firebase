import styled from "styled-components";

export const ContenedorCategorias = styled.div`
  display: flex;
  flex-flow: row;
  place-content: SPACE-BETWEEN;
  position: relative;
  width: auto;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: -30px;
    right: -30px;
    border-bottom: 2px solid white;
  }
`;
export const Posicion = styled.div`
  display: flex;
  flex-flow: row;
  cursor: pointer;
  &:hover {
    color: var(--orange);
  }
`;
export const Icono = styled.div`
  color: white;

  ${Posicion}:hover & {
    color: var(--orange);
  }
`;
export const Nombre = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ selected }) => (selected ? "var(--orange)" : "white")};

  ${Posicion}:hover & {
    color: var(--orange);
  }
`;
