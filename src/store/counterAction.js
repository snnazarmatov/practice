import { createSlice } from '@reduxjs/toolkit';


const initCounter = {
  counter: 0,
};


const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice;