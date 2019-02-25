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
  loadUserSettings,
  addFavorite,
  deleteFavorite
};
