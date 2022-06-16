import { createSlice } from "@reduxjs/toolkit";

export const StateSlice = createSlice({
    name : "state",
    initialState : {
        partIdx : 0,
        pageIdx : 1,
        loginState : false,
    },
    reducers : {
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

export const { setPartIdx, setPageIdx, setLoginState } = StateSlice.actions;
export default StateSlice.reducer;