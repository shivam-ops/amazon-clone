import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to the every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information form the data layer
export const useStateValue = () => useContext(StateContext);
