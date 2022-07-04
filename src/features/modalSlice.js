import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name : "modal",
    initialState : {
        isModalOn : false,
    },
    reducers : {
        setIsModalOn : (state, action) => {
            console.log(action);
            state.isModalOn = action.payload;
        },
        toggleModalOn : (state, _) => {
            state.isModalOn = !state.isModalOn;
        }
    }
});

export const { setIsModalOn, toggleModalOn } = ModalSlice.actions;
export default ModalSlice.reducer;