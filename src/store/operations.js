import actions from "./actions";
import {RATES_URL} from "../constants";

const getRates = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(RATES_URL);
      const rates = await response.json();
      dispatch(actions.loadRates(rates.rates));
    } catch (error) {
      dispatch(actions.setError(error));
    }
  }
};

const setBase = (base) => {
  return (dispatch) => {
    dispatch(actions.setBaseCurrency(base));
  }
};

const toggleFavorite = (currencyName) => {
  return (dispatch) => {
    dispatch(actions.toggleFavorite(currencyName));
  }
};

const resetRatesError = () => {
  return (dispatch) => {
    dispatch(actions.setError(null));
  }
};


export default {
  getRates,
  setBase,
  toggleFavorite,
  resetRatesError
};
