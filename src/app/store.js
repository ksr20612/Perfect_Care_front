import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import stateReducer from "../features/stateSlice";
import modalReducer from "../features/modalSlice";
import pageReducer from "../features/pageSlice";
import part1Reducer from "../features/parts/part1Slice";
import part2Reducer from "../features/parts/part2Slice";
import part3Reducer from "../features/parts/part3Slice";
import part4Reducer from "../features/parts/part4Slice";
import part5Reducer from "../features/parts/part5Slice";

const store = configureStore({
    reducer : {
        state : stateReducer,
        modal : modalReducer,
        page : pageReducer,
        part1 : part1Reducer,
        part2 : part2Reducer,
        part3 : part3Reducer,
        part4 : part4Reducer,
        part5 : part5Reducer,
    },
    middleware : (getDefaultMiddleware) => [
        ...getDefaultMiddleware({serializableCheck : false}),
        logger,
        ReduxThunk,
    ]
});

export default store;