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
        reset : (state, {payload}) => {
            state.userIdx = "";
            state.id = "";
            state.nick = "";
            state.token = ""; 
            state.loginState = false;
        }
    }
});

export const { setIdx, setId, setNick, setToken, setLoginState, reset } = StateSlice.actions;
export default StateSlice.reducer;