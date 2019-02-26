import Type from "./types";

const loadRates = (rates) => ({
  type: Type.RATES_LOAD,
  payload: {
    rates
  }
});

const setError = (error) => ({
  type: Type.FAILURE,
  payload: {
    error
  }
});

const setBaseCurrency = (base) => ({
  type: Type.BASE_CURRENCY_SET,
  payload: {
    base
  }
});

const toggleFavorite = (currencyName) => ({
  type: Type.FAVORITE_TOGGLE,
  payload: {
    currencyName
  }
});

export default {
  loadRates,
  setError,
  setBaseCurrency,
  toggleFavorite,
};
