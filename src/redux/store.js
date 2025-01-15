import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog/catalogSlice';
import filterReducer from './filters/filterSlice';

export const store = configureStore({
    reducer: {
      catalog: catalogReducer,
      filters: filterReducer,
    },
  });