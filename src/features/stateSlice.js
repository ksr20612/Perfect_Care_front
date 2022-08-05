import { createSlice } from "@reduxjs/toolkit";

export const StateSlice = createSlice({
    name : "state",
    initialState : {
        userIdx : "1",
        id : "ksr20612",
        nick : "ethan",
        token : "",
        loginState : false,
    },
    reducers : {
        setIdx : (state, {payload}) => {
            state.userIdx = payload+"";
        },
        setId : (state, {payload}) => {
            state.id = payload+"";
        },
        setNick : (state, {payload}) => {
            state.nick = payload+"";
        },
        setToken : (state, {payload}) => {
            state.token = payload;
        },
        setLoginState : (state, action) => {
            state.loginState = action.payload;
        },
    }
});

export const { setIdx, setId, setNick, setToken, setLoginState } = StateSlice.actions;
export default StateSlice.reducer;