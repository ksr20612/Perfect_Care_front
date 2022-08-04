import { createSlice } from "@reduxjs/toolkit";

export const Part5Slice = createSlice({
    name : "part5",
    initialState : {
        myself : [],
        test : {
            scores : [],
        },
    },
    reducers : {
        setMyself : (state, { payload }) => {
            state.myself = payload;
        },
        setScores : (state, { payload }) => {
            state.test.scores = payload;
        },
    }
});

export const { setMyself, setScores, } = Part5Slice.actions;
export default Part5Slice.reducer;