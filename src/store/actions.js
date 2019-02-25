import Type from "./types";

const loadRates = (rates) => ({
  type: Type.RATES_LOAD,
  payload: {
    rates
  }
});

const failRates = (error) => ({
  type: Type.RATES_FAILURE,
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

const addFavorite = (currencyName) => ({
  type: Type.FAVORITE_ADD,
  payload: {
    currencyName
  }
});

const deleteFavorite = (currencyName) => ({
  type: Type.FAVORITE_DELETE,
  payload: {
    currencyName
  }
});

export default {
  loadRates,
  failRates,
  setBaseCurrency,
  loadUserSettings,
  addFavorite,
  deleteFavorite
};
