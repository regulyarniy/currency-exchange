import React, {Component, Fragment} from 'react';
import Home from "./pages/Home";
import {CssBaseline} from "@material-ui/core";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
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

export default App;
