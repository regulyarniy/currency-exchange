import React, {Component, Fragment} from 'react';
import Home from "./pages/Home";
import {CssBaseline} from "@material-ui/core";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {operations} from "./store";

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
  };
};

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(operations.getRates());
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <CssBaseline/>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/calculator" component={Calculator}/>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
