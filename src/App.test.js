import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {MemoryRouter} from "react-router-dom";

describe(`App component`, () => {
  const mockProps = {
    dispatch: jest.fn(),
    getRates: jest.fn(),
    base: ``,
    currencies: [],
    favoriteRates: {},
    notFavoriteRates: {},
    toggleFavorite: jest.fn(),
  };

  it(`renders without errors`, () => {
    const div = document.createElement(`div`);
    ReactDOM.render(
      <MemoryRouter>
        <App {...mockProps} />
      </MemoryRouter>,
      div);
  })
});
