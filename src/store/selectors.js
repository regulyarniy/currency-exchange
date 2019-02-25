const getCurrencies = (state) => [state.base, ...Object.keys(state.rates)];

export default {
  getCurrencies
}
