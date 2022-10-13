import { createSlice } from "@reduxjs/toolkit";

export const Part5Slice = createSlice({
    name : "part5",
    initialState : {
        myself : [],
        test : {
            types : [],
            scores : [],
        },
        type : {
            types : [],
            scores : [],
        }
    },
    reducers : {
        setMyself : (state, { payload }) => {
            state.myself = payload;
        },
        setScores : (state, { payload }) => {
            state.test.scores = payload;
        },
        setTypeScores : (state, { payload }) => {
            state.type.scores = payload;
        },
        setTestTypes : (state, { payload }) => {
            state.test.types = payload;
        },
        setTypeTypes : (state, { payload }) => {
            state.type.types = payload;
        }
    }
});

export const { setMyself, setScores, setTypeScores, setTestTypes, setTypeTypes } = Part5Slice.actions;
export default Part5Slice.reducer;