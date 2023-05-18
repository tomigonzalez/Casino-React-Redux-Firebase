import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, Machine } from "../../data/Machine";

const INITIAL_STATE = {
  machine: Machine,

  totalProducts: TotalProducts,
};

// const machineReducers = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const machineSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    filters: (state, id) => {},
  },
});

export const machineReducer = machineSlice.reducer;
export const { filters } = machineSlice.actions;

export default machineReducer;
