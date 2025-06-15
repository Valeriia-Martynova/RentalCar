import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./cars/slice";
import { favoritesReducer } from "./favorites/slice";
import filtersReducer from "./filters/slice";

const persistConfig = {
  key: "favorites",
  version: 1,
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer,
    filters: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
