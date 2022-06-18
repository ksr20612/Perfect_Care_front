import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { ReactComponent as ArrowIcon } from "../assets/arrow_icon.svg";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import { setPageIdx } from "../features/stateSlice";

const Screen = ({children}) => {

    const currentPage = useSelector(state=>state.state.pageIdx);
    const dispatch = useDispatch();
    const handlePage = (v) => {
        dispatch(setPageIdx(currentPage+v));
    }

    return (
        <>
            <Box>
                <Arrow className="reversed" onClick={()=>handlePage(-1)}/>
                {children}
                <Arrow onClick={()=>handlePage(1)}/>
            </Box>
        </>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    width : 80vw;
    height : calc(100vh - 6vh);
    background-color : #fff;
    display : flex;
    margin-top : 6vh;
    padding : 2vh 2vw;
`

const Arrow = styled(ArrowIcon)`
    width : 8vmin;
    height : 8vmin;
    position : absolute;
    top : 50%;
    right : 0;
    transform : translate(50%, -50%) scale(1.5);
    margin-right : 5vw;
    & > path {
        fill : ${pallette.YELLOW};
    }

    &.reversed {
        left : 0;
        margin-left : 5vw;
        transform : translate(-50%, -50%) rotate(180deg) scale(1.5);
    }
    & > path {
        transition : all 0.2s ease-in;
    }

    :hover {
        & > path {
            fill : ${darken(0.1, pallette.YELLOW)};
        }
    }
`

export default Screen;