import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name : "modal",
    initialState : {
        openedModal : null,
        isModalOn : false,
    },
    reducers : {
        open : (state, action) => {

        },
        close : (state, action) => {

        },
        setIsModalOn : (state, action) => {
            console.log(action);
            state.isModalOn = action.payload;
        },
        toggleModalOn : (state, _) => {
            state.isModalOn = !state.isModalOn;
            if(state.openedModal) state.openedModal = null; 
        }
    }
});

export const { setOpenedModal, setIsModalOn, toggleModalOn } = ModalSlice.actions;
export default ModalSlice.reducer;