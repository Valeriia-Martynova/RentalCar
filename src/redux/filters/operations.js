import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchBrandsThunk = createAsyncThunk(
  "filters/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/brands");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
