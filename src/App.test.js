import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {MemoryRouter} from "react-router-dom";

describe(`App component`, () => {
  it(`renders without errors`, () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<MemoryRouter><App/></MemoryRouter>, div);
  })
});
