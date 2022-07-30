import { createSlice } from "@reduxjs/toolkit";

export const StateSlice = createSlice({
    name : "state",
    initialState : {
        id : "",
        token : "",
        loginState : false,
    },
    reducers : {
        setId : (state, {payload}) => {
            state.id = payload+"";
        },
        setToken : (state, {payload}) => {
            state.token = payload;
        },
        setLoginState : (state, action) => {
            state.loginState = action.payload;
        },
    }
});

export const { setId, setToken, setLoginState } = StateSlice.actions;
export default StateSlice.reducer;