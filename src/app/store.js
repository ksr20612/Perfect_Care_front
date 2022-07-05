import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/stateSlice";
import modalReducer from "../features/modalSlice";
import pageReducer from "../features/pageSlice";

const store = configureStore({
    reducer : {
        state : stateReducer,
        modal : modalReducer,
        page : pageReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false}),
});

export default store;