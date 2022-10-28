import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  image: null,
  userName: null,
  phone: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setDataUser(state, action) {
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.userName = action.payload.userName;
      state.phone = action.payload.phone;
    },
    removeDataUser(state) {
      state.email = null;
      state.image = null;
      state.userName = null;
      state.phone = null;
    },
  },
});

export const { setDataUser, removeDataUser } = userDataSlice.actions;

export default userDataSlice.reducer;
