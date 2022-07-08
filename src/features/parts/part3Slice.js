import { createSlice } from "@reduxjs/toolkit";

export const Part3Slice = createSlice({
    name : "part3",
    initialState : {
        information : {
            scr4 : "", // 상황
            scr5 : {}, // 감정
            scr6 : "", // 생각
            scr7 : "", // 이미지
            scr8 : "", // 나는 어떤 사람
            scr9 : "", // 최악의 경우
            scr10 : "", // 자동사고
            scr16 : "" //자동사고의 오류
        }
    },
    reducers : {
        setScr4 : (state, action) => {
            state.information.scr4 = action.payload;
        },
        setScr5 : (state, action) => {
            if(state.information.scr5.keys.reduce((pre, _)=>pre+1,0)>3) return;
            state.information.scr5 = {...state.information.scr5, ...action.payload};
        },
        setScr6 : (state, action) => {
            state.information.scr6 = action.payload;
        },
        setScr7 : (state, action) => {
            state.information.scr7 = action.payload;
        },
        setScr8 : (state, action) => {
            state.information.scr8 = action.payload;
        },
        setScr9 : (state, action) => {
            state.information.scr9 = action.payload;
        },
        setScr10 : (state, action) => {
            state.information.scr10 = action.payload;
        },
        setScr16 : (state, action) => {
            state.information.scr16 = action.payload;
        },
    }
});

export const { setScr4, setScr5, setScr6, setScr7, setScr8, setScr9, setScr10, setScr16 } = Part3Slice.actions;
export default Part3Slice.reducer;