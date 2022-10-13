import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'User',
  initialState: {
    myuser: {email: null, password: null},
    isLogin: false,
  },
  reducers: {
    signIn(state, action) {
      state.myuser = action.payload;
    },
    signOut(state) {
      state.myuser = state.myuser.email = null;
      state.myuser = state.myuser.password = null;
    },
  },
});

export const UserAction = userSlice.actions;
export default userSlice;
