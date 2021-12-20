import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from './auth';
import counterSlice from "./counter";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer
    }
});

export const counterAction = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;