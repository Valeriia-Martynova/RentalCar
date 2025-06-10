import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", number: "" };

const filtersSlice = createSlice({
  name: "filters",
  number: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
