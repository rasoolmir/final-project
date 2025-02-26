import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api/request";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await request.get("/products");
  return response.data;
});

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [],
    loading: false,
    error: null,
    visibleItemCount: 6,
  },
  reducers: {
    loadMore: (state) => {
      state.visibleItemCount += 6;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.items = [];
      });
  },
});

export const { loadMore } = ShopSlice.actions;
export default ShopSlice.reducer;
