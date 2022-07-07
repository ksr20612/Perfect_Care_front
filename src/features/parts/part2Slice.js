import { createSlice } from "@reduxjs/toolkit";
import Standards from "../../assets/jsons/standards";

export const Part2Slice = createSlice({
    name : "part2",
    initialState : {
        scr2 : {
            std1 : Standards["학업/능력"][0],
            std2 : Standards["외모/건강"][0],
            std3 : Standards["대인관계"][0],
            std4 : Standards["성공/행복"][0],
        },
    },
    reducers : {
        setStandard : (state, action) => {
            console.log(action);
            state.scr2 = {...state.scr2, ...action.payload};
        }
    }
});

export const { setStandard } = Part2Slice.actions;
export default Part2Slice.reducer;