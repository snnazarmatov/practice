import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterAction';


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export default store;