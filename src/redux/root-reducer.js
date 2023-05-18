import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import categoriesReducer from "./categories/categories-reducer";
import machineReducer from "./machine/machine-reducer";
import bigwinReducer from "./bigwins/bigwins-reducer";

import storage from "redux-persist/es/storage";
import secccionesReducer from "./seccion/seccion-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: [],
};

const rootReducer = combineReducers({
  machine: machineReducer,
  categories: categoriesReducer,
  bigwins: bigwinReducer,
  secciones: secccionesReducer,
});

export default persistReducer(persistConfig, rootReducer);
