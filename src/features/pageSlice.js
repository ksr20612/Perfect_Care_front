import { createSlice } from "@reduxjs/toolkit";

// prev / next 버튼 클릭시 callback( 데이터 저장 등 )
export const PageSlice = createSlice({
    name : "page",
    initialState : {
        isClicked : false,
        pageIdx : 1,
    },
    reducers : {
        setIsClicked : (state, action) => {
            state.isClicked = action.payload;
        },
        setPageIdx : (state, {payload}) => {
            state.pageIdx = payload*1;
        }
    }
});


export const { setIsClicked, setPageIdx } = PageSlice.actions;
export default PageSlice.reducer;