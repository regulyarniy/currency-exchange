import Type from "./types";
import {BASE_CURRENCY} from "../constants";

const INITIAL_STATE = {
  base: BASE_CURRENCY,
  rates: {},
  error: null
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case Type.RATES_LOAD:
      return {
        ...state,
        rates: action.payload.rates,
      };

    case Type.RATES_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default appReducer;
