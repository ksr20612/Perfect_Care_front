import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ProgressBar = () => {

    const curPage = useSelector(state => state.state.pageIdx);
    // pageLen 가져오기(pageInfo);

    return (
        <Box>

        </Box>
    );
}

const Box = styled.div`
    position : fixed;
    bottom : 0;
    width : 100vw;
    height : 8vh;
    background-color : transparent;
    display : flex;
    align-items : center;
    justify-content : center;
`

export default ProgressBar;