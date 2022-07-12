import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/btn_s_arrow_def.svg";
import { darken } from "polished";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPageIdx } from "../features/stateSlice";
import { setIsClicked } from "../features/pageSlice";
import { toastInfo } from "../utils/toast";
import { getPageLen } from "../app/pageInfo";

const Screen = ({children}) => {

    const isAlreadyClicked = useSelector(state=>state.page.isClicked);
    const currentPage = useSelector(state=>state.state.pageIdx);
    const partIdx = useLocation().pathname.substr(1,1) * 1;
    const pageLen = getPageLen(partIdx);
    const prevCb = useSelector(state=>state.page.prev) || (()=>{console.log("이전으로")});
    const nextCb = useSelector(state=>state.page.next) || (()=>{console.log("다음으로")});
    const beforePrevCb = useSelector(state=>state.page.beforePrev) || (()=>false);
    const beforeNextCb = useSelector(state=>state.page.beforeNext) || (()=>false);
    const commonCb = useSelector(state=>state.page.common) || (()=>{});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlePage = (v) => {
        if(isAlreadyClicked) return;

        // #0
        let callback; 
        if(v < 0) {
            callback = beforePrevCb();
        }else {
            callback = beforeNextCb();
        }
        if(callback) {
            if(typeof callback === "function") callback();
        } 

        if(currentPage+v === 0) {
            return toastInfo("이전 세션으로 이동합니다.", {
                onOpen : () => {
                    dispatch(setIsClicked(true));
                },
                onClose : () => {
                    navigate(`/${partIdx-1}`);
                    dispatch(setPageIdx(getPageLen(partIdx-1)));
                    dispatch(setIsClicked(false));
                }
            });
        }else if(currentPage+v === pageLen + 1) {
            return toastInfo("다음 세션으로 이동합니다.", {
                onOpen : () => {
                    dispatch(setIsClicked(true));
                },
                onClose : () => {
                    navigate(`/${partIdx+1}`);
                    dispatch(setPageIdx(1));
                    dispatch(setIsClicked(false));
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
        <Box>
            <Arrow className="reversed" onClick={()=>handlePage(-1)}/>
            {children}
            <Arrow onClick={()=>handlePage(1)}/>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    width : 80vw;
    max-width : 1180px;
    height : calc(100vh - 6vh);
    background-color : #fff;
    display : flex;
    margin-top : 6vh;
    padding-top : min(5vh, 62px);
    padding-left : min(15vw, 110px);
    padding-right : min(15vw, 110px);
    background-color : #f9f8f7;
    position : relative;
`

const Arrow = styled(ArrowIcon)`
    width : 50px;
    height : 50px;
    position : absolute;
    top : 50%;
    right : 0;
    transform : translate(-50%, -50%) rotate(180deg);
    cursor : pointer;

    & > path {
        fill : ${pallette.YELLOW};
    }

    &.reversed {
        left : 0;
        transform : translate(50%, -50%);
    }
    & > path {
        transition : all 0.2s ease-in;
    }

    &:hover {
        & path {
            fill : ${darken(0.1, pallette.YELLOW)};
        }
    }
`

export default Screen;