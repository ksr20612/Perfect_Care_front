import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/arrow_icon.svg";
import { darken } from "polished";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPageIdx } from "../features/stateSlice";
import { toastInfo } from "../utils/toast";
import { getPageLen } from "../app/pageInfo";

const Screen = ({children}) => {

    const currentPage = useSelector(state=>state.state.pageIdx);
    const partIdx = useLocation().pathname.substr(1,1) * 1;
    const pageLen = getPageLen(partIdx);
    const prevCb = useSelector(state=>state.page.prev) || (()=>{console.log("이전으로")});
    const nextCb = useSelector(state=>state.page.next) || (()=>{console.log("다음으로")});
    const commonCb = useSelector(state=>state.page.common) || (()=>{});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlePage = (v) => {
        if(currentPage+v === 0) {
            return toastInfo("이전 세션으로 이동합니다.", {
                onClose : () => {
                    navigate(`/${partIdx-1}`);
                    dispatch(setPageIdx(getPageLen(partIdx-1)));
                }
            });
        }else if(currentPage+v === pageLen + 1) {
            return toastInfo("다음 세션으로 이동합니다.", {
                onClose : () => {
                    navigate(`/${partIdx+1}`);
                    dispatch(setPageIdx(1));
                }
            });
        }
        // #1 데이터 저장(콜백 호출)
        if(v < 0) {
            prevCb();
        }else {
            nextCb();
        }
        commonCb();

        // #2 페이지 전환
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