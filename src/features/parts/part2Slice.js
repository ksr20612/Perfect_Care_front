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
        comment : [
            {name : "AB", content : "가나다라마바사아자차카타파하", likes : 0},
            {name : "CD", content : "가나다라마바사아자차카타파하", likes : 0},
            {name : "EF", content : "가나다라마바사아자차카타파하", likes : 0},
        ],
    },
    reducers : {
        setStandard : (state, action) => {
            console.log(action);
            state.scr2 = {...state.scr2, ...action.payload};
        },
        setComment : (state, { payload }) => {
            state.comment = [payload, ...state.comment];
        }
    }
});

export const { setStandard, setComment } = Part2Slice.actions;
export default Part2Slice.reducer;