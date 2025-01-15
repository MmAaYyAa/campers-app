import { configureStore } from '@reduxjs/toolkit';
import {catalogReducer} from './catalog/catalogSlice';
import {filtersReducer} from './filters/filterSlice';

export const store = configureStore({
    reducer: {
      catalog: catalogReducer,
      filters: filtersReducer,
    },
  });