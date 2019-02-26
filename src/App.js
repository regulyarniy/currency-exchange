import React, {Component, lazy, Suspense} from 'react';
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {operations, selectors} from "./store";
import Fallback from "./components/Fallback";

const Home = lazy(() => import(`./pages/Home`));
const Calculator = lazy(() => import(`./pages/Calculator`));

const mapStateToProps = (state) => {
  return {
    base: state.base,
    favoriteRates: selectors.getFavoriteRates(state),
    notFavoriteRates: selectors.getNotFavoriteRates(state),
    currencies: selectors.getCurrencies(state),
    initialRates: state.initialRates
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRates: () => dispatch(operations.getRates()),
    setBase: (base) => dispatch(operations.setBase(base)),
    toggleFavorite: (currencyName) => dispatch(operations.toggleFavorite(currencyName))
  }
};

export class App extends Component {
  componentDidMount() {
    this.props.getRates();
  }

  render() {
    const {
      base,
      currencies,
      setBase,
      favoriteRates,
      notFavoriteRates,
      toggleFavorite,
      initialRates
    } = this.props;

    const homeProps = {favoriteRates, notFavoriteRates, onToggleFavorite: toggleFavorite};
    const calculatorProps = {currencies, initialRates};
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Fallback/>}>
          <CssBaseline/>
          <Header base={base} currencies={currencies} onBaseChange={setBase}/>
          <Route path="/" exact render={() => <Home {...homeProps}/>}/>
          <Route path="/calculator" render={() => <Calculator {...calculatorProps}/>}/>
        </Suspense>
      </Router>
    );
  }
}

App.propTypes = {
  getRates: PropTypes.func,
  setBase: PropTypes.func,
  base: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  favoriteRates: PropTypes.object,
  notFavoriteRates: PropTypes.object,
  toggleFavorite: PropTypes.func,
  initialRates: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
