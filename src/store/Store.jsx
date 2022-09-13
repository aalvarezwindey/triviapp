import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const StoreContext = createContext();

export const Store = ({ initialState, children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoreContext.Provider>
);
