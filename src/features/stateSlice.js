import { createSlice } from "@reduxjs/toolkit";

export const StateSlice = createSlice({
    name : "state",
    initialState : {
        id : null,
        partIdx : 0, // url로 관리
        pageIdx : 1,
        loginState : false,
    },
    reducers : {
        setId : (state, {payload}) => {
            state.id = payload+"";
        },
        setPartIdx : (state, action) => {
            state.partIdx = action.payload*1;
        },
        setPageIdx : (state, action) => {
            state.pageIdx = action.payload*1;
        },
        setLoginState : (state, action) => {
            state.loginState = action.payload;
        },
    }
});

export const { setId, setPartIdx, setPageIdx, setLoginState } = StateSlice.actions;
export default StateSlice.reducer;