import { BigWin } from "../../data/BigWin";

const INITIAL_STATE = {
  bigwins: BigWin,
};

const bigwinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bigwinReducer;
