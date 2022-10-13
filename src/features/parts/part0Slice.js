import { createSlice } from "@reduxjs/toolkit";

export const Part0Slice = createSlice({
    name : "part0",
    initialState : {
        test : {
            types : [],
            scores : [],
        }
    },
    reducers : {
        setScores : (state, { payload }) => {
            state.test.scores = payload;
        },
        setTypes : (state, { payload }) => {
            state.test.types = payload;
        }
    }
});

export const { setScores, setTypes } = Part0Slice.actions;
export default Part0Slice.reducer;