import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    loading: false,
    wallets: [],
    categories: [],
  },
  reducers: {
    setWallets(state, action) {
      state.wallets = action.payload.wallets;
    },
    clearWallets(state, action) {
      state.wallets = [];
      state.categories = [];
    },
    setCategories(state, action) {
      console.log("action:", action);
      state.categories = action.payload;
    },
  },
});

export const { setWallets, clearWallets, setCategories } = globalSlice.actions;

export default globalSlice.reducer;
