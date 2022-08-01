import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPageLen } from "../app/pageInfo";
import pallette from "../styles/pallette.css";
import { lighten, darken } from "polished";
import { usePage } from "../hooks/usePage";
import { GrFormNextLink as ArrowNextIcon, GrFormPreviousLink as ArrowPrevIcon } from "react-icons/gr";

const ProgressBar = () => {

    const pageLen = getPageLen(useLocation().pathname.substr(1,1));
    const [currentPage, partIdx, handlePage, ] = usePage({});

    return (
        <Box>
            <Arrow><ArrowPrevIcon/></Arrow>
            {
                [...Array(pageLen)].map((_, i)=>{
                    return (
                        <Item className={currentPage===i+1? "current" : null} key={`item_${i}`}>{i+1}</Item>
                    )
                }) 
            }
            <Arrow><ArrowNextIcon/></Arrow>
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
    z-index : 9999;

    & > div {
        margin-right : 39px;

        &:last-of-type {
            margin-right : 0;
        }
    }
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
const Item = styled.div`
    font-size : 1.2rem;
    color : ${pallette.NEWGREEN};
    font-family : "Bold";
    transition : all 0.3s ease-in-out;
    height : 15px;
    width : 15px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50%;

    &.current {
        color : ${darken(0.3, pallette.NEWGREEN)};
        background-color : ${lighten(0.2, pallette.NEWGREEN)};
    }
`
const Arrow = styled.div`
    font-size : 1.2rem;
    color : ${darken(0.3, pallette.NEWGREEN)};
    font-family : "Arial_Bold";
    font-weight : bolder;
    cursor : pointer;
    display : flex;
    align-items : center;
    justify-content : center;
`

export default ProgressBar;