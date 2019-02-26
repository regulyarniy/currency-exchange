import React, {Component, Fragment} from 'react';
import Home from "./pages/Home";
import {CssBaseline} from "@material-ui/core";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {operations, selectors} from "./store";

const mapStateToProps = (state) => {
  return {
    base: state.base,
    favoriteRates: selectors.getFavoriteRates(state),
    notFavoriteRates: selectors.getNotFavoriteRates(state),
    currencies: selectors.getCurrencies(state)
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
      toggleFavorite
    } = this.props;

    const homeProps = {favoriteRates, notFavoriteRates, onToggleFavorite: toggleFavorite};
    const calculatorProps = {currencies};
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <CssBaseline/>
          <Header base={base} currencies={currencies} onBaseChange={setBase}/>
          <Route path="/" exact render={() => <Home {...homeProps}/>}/>
          <Route path="/calculator" render={() => <Calculator {...calculatorProps}/>}/>
        </Fragment>
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
  toggleFavorite: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
