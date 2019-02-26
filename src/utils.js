import {LOCAL_SETTINGS} from "./constants";

export const format = (number) => parseFloat(number.toFixed(4), 10);

export const loadLocalState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_SETTINGS);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveLocalState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_SETTINGS, serializedState);
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  format,
  loadLocalState,
  saveLocalState
};
