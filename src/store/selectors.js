const getCurrencies = (state) => [state.base, ...Object.keys(state.rates)];

const getFavoriteRates = (state) => {
  const result = {};
  state.favorites
    .forEach((currencyName) => {
        const isBase = state.base === currencyName;
        if (!isBase) {
          result[currencyName] = state.rates[currencyName]
        }
      }
    );
  return result;
};

const getNotFavoriteRates = (state) => {
  const result = {};
  Object.keys(state.rates)
    .forEach((currencyName) => {
        const isInFavorites = state.favorites.indexOf(currencyName) !== -1;
        const isBase = state.base === currencyName;
        if (!isInFavorites && !isBase)
          result[currencyName] = state.rates[currencyName]
      }
    );
  return result;
};

export default {
  getCurrencies,
  getFavoriteRates,
  getNotFavoriteRates
}
