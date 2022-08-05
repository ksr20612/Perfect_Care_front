import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/btn_s_arrow_def.svg";
import { darken, lighten } from "polished";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsClicked, setPageIdx } from "../features/pageSlice";
import { toastInfo } from "../utils/toast";
import { getPageLen } from "../app/pageInfo";
import { toast } from "react-toastify";
import { Arrow } from "../styles/components/arrow";

export const usePage = ({
    onBeforePrev = f => f,
    onBeforeNext = f => f,
    onAfterPrev = f => f,
    onAfterNext = f => f,
}) => {

    const isAlreadyClicked = useSelector(state=>state.page.isClicked);
    const currentPage = useSelector(state=>state.page.pageIdx);
    const partIdx = useLocation().pathname.substr(1,1) * 1;
    const pageLen = getPageLen(partIdx);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePage = (v) => {

        if(isAlreadyClicked) return;

        // #0
        let result = true;
        if(v < 0) {
            if(onBeforePrev) result = onBeforePrev();
        }else {
            if(onBeforeNext) result = onBeforeNext();
        }
        if(result === false) return;

        if(currentPage+v === 0) {
            if(partIdx + v <= 0) return;
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

            if(partIdx + v >= 6) {
                return toastInfo(`모든 세션이 종료되었습니다.`, {
                    onOpen : () => {
                        dispatch(setIsClicked(true));
                    },
                    onClose : () => {
                        navigate(`/end`);
                        dispatch(setPageIdx(0));
                        dispatch(setIsClicked(false));
                    }
                })
            }
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

        // 페이지 전환
        dispatch(setPageIdx(currentPage+v));

        // 데이터 저장(콜백 호출)
        if(v < 0) {
            if(onAfterPrev) onAfterPrev();
        }else {
            if(onAfterPrev) onAfterNext();
        }

    };

    const renderArrow = () => {
        return (
            <>
                <Arrow className="reversed" onClick={()=>handlePage(-1)}/>
                <Arrow onClick={()=>handlePage(1)}/>
            </>
        )
    };

    return [currentPage, partIdx, ()=>handlePage(), ()=>renderArrow()];

}