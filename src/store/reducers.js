import Type from "./types";
import {BASE_CURRENCY} from "../constants";
import {format} from "../utils";

const INITIAL_STATE = {
  base: BASE_CURRENCY,
  initialRates: {},
  rates: {},
  favorites: [],
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
      if (action.payload.base === state.base) {
        return state
      }
      const newBase = action.payload.base;
      const newRates = Object.assign({}, state.initialRates);
      const ratio = 1 / state.initialRates[newBase];
      delete newRates[newBase];
      Object.getOwnPropertyNames(newRates)
        .forEach((key) => newRates[key] = format(state.initialRates[key] * ratio));
      newRates[state.base] = format(state.initialRates[state.base] * ratio);
      return {
        ...state,
        rates: newRates,
        base: newBase
      };
    }

    case Type.FAVORITE_TOGGLE: {
      const newFavorites = state.favorites.slice();
      const favoriteIndex = newFavorites.indexOf(action.payload.currencyName);
      if (favoriteIndex !== -1) {
        newFavorites.splice(favoriteIndex, 1);
      } else {
        newFavorites.push(action.payload.currencyName);
      }
      return {
        ...state,
        favorites: newFavorites
      };
    }

    case Type.FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default appReducer;
