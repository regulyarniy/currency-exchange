import React, {Component, Fragment} from 'react';
import Home from "./pages/Home";
import {CssBaseline} from "@material-ui/core";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline/>
        <Header/>
        <Home/>
        <Calculator/>
      </Fragment>
    );
  }
}

export default App;
