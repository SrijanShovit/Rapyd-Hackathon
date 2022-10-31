import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value = Math.max(0, state.value-1);
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;