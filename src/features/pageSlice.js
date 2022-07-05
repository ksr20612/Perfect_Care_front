import { createSlice } from "@reduxjs/toolkit";

// prev / next 버튼 클릭시 callback( 데이터 저장 등 )
export const PageSlice = createSlice({
    name : "page",
    initialState : {
        prev : null,
        next : null,
        common : ()=>console.log("페이지 전환"),
    },
    reducers : {
        setPrev : (state, action) => {
            state.prev = action.payload;
        },
        setNext : (state, action) => {
            state.next = action.payload;
        },
        setCommon : (state, action) => {
            state.common = action.payload;
        }
    }
});

export const { setPrev, setNext, setCommon } = PageSlice.actions;
export default PageSlice.reducer;