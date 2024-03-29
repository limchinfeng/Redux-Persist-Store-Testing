import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUserDetails} = authSlice.actions;

export default authSlice.reducer;
