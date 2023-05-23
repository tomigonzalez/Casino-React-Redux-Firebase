import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import categoriesReducer from "./categories/categories-reducer";
import machineReducer from "./machine/machine-reducer";
import bigwinReducer from "./bigwins/bigwins-reducer";

import storage from "redux-persist/es/storage";
import seccionesReducer from "./seccion/seccion-reducer";
import userReducer from "./user/user-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["user"],
};

const rootReducer = combineReducers({
  machine: machineReducer,
  categories: categoriesReducer,
  bigwins: bigwinReducer,
  secciones: seccionesReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
