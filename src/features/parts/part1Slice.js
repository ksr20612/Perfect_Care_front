import { createSlice } from "@reduxjs/toolkit";
import { getLength } from "../../app/questionList";

export const Part1Slice = createSlice({
    name : "part1",
    initialState : {
        test : {
            name : "우울",
            scores : [],
        },
        goal : {
            before : "",
            after : "",
        }
    },
    reducers : {
        setTestName : (state, { payload }) => {
            state.test.name = payload;
        },
        setScores : (state, { payload }) => {
            state.test.scores = payload;
        },
        setBefore : (state, { payload }) => {
            state.goal.before = payload;
        },
        setAfter : (state, { payload }) => {
            state.goal.after = payload;
        },
    }
});

export const { setTestName, setScores, setBefore, setAfter, } = Part1Slice.actions;
export default Part1Slice.reducer;