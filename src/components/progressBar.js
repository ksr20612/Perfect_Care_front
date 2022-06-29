import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPageLen } from "../app/pageInfo";
import pallette from "../styles/pallette.css";

const ProgressBar = () => {

    const curPage = useSelector(state => state.state.pageIdx);
    const pageLen = getPageLen(3);
    // pageLen 가져오기(pageInfo);

    return (
        <Box>
            {
                [...Array(pageLen)].map((_, i)=>{
                    return (
                        <Circle className={curPage===i+1? "current" : null} key={`circle_${i}`} />
                    )
                }) 
            }
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
const Circle = styled.div`
    width : 1vmax;
    height : 1vmax;
    border-radius : 50%;
    background-color : ${pallette.YELLOW};
    transition : all 0.3s ease-in-out;

    &:not(:first-child) {
        margin-left : 3vmax;
    }
    &.current {
        width : 2.5vmax;
        height : 2.5vmax;
    }
`

export default ProgressBar;