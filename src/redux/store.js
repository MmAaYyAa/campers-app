import { configureStore } from '@reduxjs/toolkit';
import {catalogReducer} from './catalog/catalogSlice';
import {filtersReducer} from './filters/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {favoritesReducer} from '../redux/favorites/favoritesSlice';

const persistConfig = {
  key: 'favorites',
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
    reducer: {
      catalog: catalogReducer,
      filters: filtersReducer,
      favorites: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);