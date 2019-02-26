import Type from "./types";

const loadRates = (rates) => ({
  type: Type.RATES_LOAD,
  payload: {
    rates
  }
});

const failRates = (error) => ({
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

const loadUserSettings = (settings) => ({
  type: Type.USER_SETTINGS_LOAD,
  payload: {
    settings
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
  failRates,
  setBaseCurrency,
  loadUserSettings,
  toggleFavorite
};
