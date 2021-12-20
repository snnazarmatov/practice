import {createSlice} from '@reduxjs/toolkit';


const init = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: init,
    reducers: {
        increment(state,action) {
            state.counter++
        },
        decrement(state,action) {
            state.counter--;
        },
        increace(state,action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state, action) {
            state.showCounter = !state.showCounter;
        }
    }
})
export default counterSlice;