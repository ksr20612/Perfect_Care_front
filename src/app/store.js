import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/stateSlice";
import modalReducer from "../features/modalSlice";

const store = configureStore({
    reducer : {
        state : stateReducer,
        modal : modalReducer,
    }
});

export default store;