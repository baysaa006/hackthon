import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    fb_id: null,
    google_id: null,
    email: null,
    nickname: null,
    token: null,
    userId: null,
    avatar: null,
    listener: null,
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.fb_id = action.payload.fb_id;
      state.nickname = action.payload.nickname;
      state.google_id = action.payload.google_id;
      state.userId = action.payload.id;
      state.avatar = action.payload.avatar;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state, action) {
      state.token = null;
      state.email = null;
      state.fb_id = null;
      state.userId = null;
      state.nickname = null;
      state.google_id = null;
      state.avatar = null;
    },
    changeListener(state, action) {
      state.listener = action.payload;
    },
  },
});

export const { setUser, setToken, logout, changeListener } = authSlice.actions;

export default authSlice.reducer;
