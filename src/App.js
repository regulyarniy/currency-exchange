import React, {Component, Fragment} from 'react';
import Home from "./pages/Home";
import {CssBaseline} from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline/>
        <Home/>
      </Fragment>
    );
  }
}

export default App;
