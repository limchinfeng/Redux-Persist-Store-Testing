import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  signIn: false,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setSignIn: state => {
      state.signIn = !state.signIn;
    }
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, setSignIn} = counterSlice.actions;

export default counterSlice.reducer;
