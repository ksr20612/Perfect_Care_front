import { createSlice } from "@reduxjs/toolkit";

export const Part4Slice = createSlice({
    name : "part4",
    initialState : {
        message : [],
        illustration : {
            circumstance : "",
            thought : "",
            reaction : "",
            futureReaction : "",
        }
    },
    reducers : {
        setMessage : (state, { payload }) => {
            state.message = [...state.message, payload];
            if(!state.illustration.circumstance) state.illustration.circumstance = payload;
        },
        setThought : (state, { payload }) => {
            state.illustration.thought = payload;
        },
        setReaction : (state, { payload }) => {
            state.illustration.reaction = payload;
        },
        setFutureReaction : (state, { payload }) => {
            state.illustration.futureReaction = payload;
        }
    }
});

export const { setMessage, setThought, setReaction, setFutureReaction } = Part4Slice.actions;
export default Part4Slice.reducer;