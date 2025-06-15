import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { fetchBrandsThunk } from "./operations";

const initialState = {
  brand: "",
  rentalPrice: "",
  mileage: { from: "", to: "" },
  brands: [],
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilterValue(state, action) {
      const { field, value, subField } = action.payload;
      if (field === "mileage" && subField) {
        state.mileage[subField] = value;
      } else {
        state[field] = value;
      }
    },
    applyFilters(state) {
      state.page = 1;
      state.items = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandsThunk.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
      })
      .addMatcher(isPending(fetchBrandsThunk), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejected(fetchBrandsThunk), (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { updateFilterValue, applyFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
