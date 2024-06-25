import { createSlice } from "@reduxjs/toolkit";


const initialState = {count:0};
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state)=>{
         state.count = state.count+ 1
        },
        incrementByvalue : (state, action)=>{
         state.count = state.count+ action.payload
        },
        decrement : (state)=>{
            state.count = state.count - 1
        }
    },
});

export const {decrement,increment, incrementByvalue} = counterSlice.actions;
export default counterSlice.reducer;