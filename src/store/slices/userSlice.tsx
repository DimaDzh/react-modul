import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
  image: null,
  userName: null,
  phone: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.image = action.payload.image;
      state.userName = action.payload.userName;
      state.phone = action.payload.phone;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.image = null;
      state.userName = null;
      state.phone = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
