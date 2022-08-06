import { createSlice } from "@reduxjs/toolkit";

export const Part4Slice = createSlice({
    name : "part4",
    initialState : {
        message : [],
        mistake : {
            circumstance : "",
            thought : "",
            reaction : "",
            futureReaction : "",
        }
    },
    reducers : {
        setMessage : (state, { payload }) => {
            state.message = [...state.message, payload];
            if(!state.mistake.circumstance) state.mistake.circumstance = payload;
        },
        setCircumstance : (state, { payload }) => {
            state.mistake.circumstance = payload;
        },
        setThought : (state, { payload }) => {
            state.mistake.thought = payload;
        },
        setReaction : (state, { payload }) => {
            state.mistake.reaction = payload;
        },
        setFutureReaction : (state, { payload }) => {
            state.mistake.futureReaction = payload;
        }
    }
});

export const { setMessage, setCircumstance, setThought, setReaction, setFutureReaction } = Part4Slice.actions;
export default Part4Slice.reducer;