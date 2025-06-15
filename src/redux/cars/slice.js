import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { fetchCarsThunk, fetchCarByIdThunk } from "./operations";

const initialState = {
  items: [],
  selectedCar: null,
  page: 1,
  hasMore: true,
  favorites: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage(state) {
      state.page += 1;
    },
    toggleFavorite(state, action) {
      const carId = action.payload;
      if (state.favorites.includes(carId)) {
        state.favorites = state.favorites.filter((id) => id !== carId);
      } else {
        state.favorites.push(carId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        const newCars = Array.isArray(action.payload)
          ? action.payload
          : action.payload.cars || [];

        if (state.page === 1) {
          state.items = newCars;
        } else {
          state.items.push(...newCars);
        }
        state.hasMore = newCars.length === 12;
        state.loading = false;
      })
      .addCase(fetchCarByIdThunk.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.loading = false;
      })
      .addMatcher(isPending(fetchCarsThunk, fetchCarByIdThunk), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        isRejected(fetchCarsThunk, fetchCarByIdThunk),
        (state, action) => {
          state.loading = false;
          state.error = action.payload || action.error.message;
        }
      );
  },
});

export const { resetCars, incrementPage, toggleFavorite } = carsSlice.actions;

export default carsSlice.reducer;
