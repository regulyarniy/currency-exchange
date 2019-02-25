import actions from "./actions";
import {RATES_URL} from "../constants";

const getRates = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(RATES_URL);
      const rates = await response.json();
      dispatch(actions.loadRates(rates.rates));
    } catch (error) {
      dispatch(actions.failRates(error));
    }
  }
};

const resetRatesError = () => {
  return (dispatch) => {
    dispatch(actions.failRates(null));
  }
};


export default {
  getRates,
  resetRatesError
};
