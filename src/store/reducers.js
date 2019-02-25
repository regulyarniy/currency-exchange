import Type from "./types";
import {BASE_CURRENCY} from "../constants";
import {format} from "../utils";

const INITIAL_STATE = {
  base: BASE_CURRENCY,
  initialRates: {},
  rates: {},
  error: null
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case Type.RATES_LOAD:
      return {
        ...state,
        base: BASE_CURRENCY,
        rates: action.payload.rates,
        initialRates: {[BASE_CURRENCY]: 1, ...action.payload.rates},
      };

    case Type.BASE_CURRENCY_SET: {
      const newBase = action.payload.base;
      const newRates = Object.assign({}, state.initialRates);
      const ratio = 1 / state.initialRates[newBase];
      delete newRates[newBase];
      Object.getOwnPropertyNames(newRates)
        .forEach((key) => newRates[key] = format(state.initialRates[key] * ratio));
      newRates[state.base] = format(state.initialRates[state.base]*ratio);
      return {
        ...state,
        rates: newRates,
        base: newBase
      };
    }

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
