import { secciones } from "../../data/Clases";

const INITIAL_STATE = {
  secciones: secciones,
};

const secccionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default secccionesReducer;
