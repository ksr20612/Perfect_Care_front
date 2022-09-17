import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import DiscreteSlider from "../../components/discreteSlider";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { useSelector, useDispatch } from "react-redux";
import { setScr4 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr4 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(setScr4(v));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr4", { userIdx, circumstance : scr4 }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        }
    });
    useFetchREST(`/part3/illustration/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setScr4(result.data.illustration.scr4));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,4)}/>
            <Box>
                <div>내가 당황스러워했던 사건 뒤에는 나의 자동사고가 숨어있다.</div>
                <div>형사가 되어 자동사고라는 용의자를 잡아보자!</div>
                <Question>
                    최근에 경험했던 당황스러웠거나, 불안했던 상황을 생각하며 적어보세요.
                </Question>
                <Answer>
                    <div className="subQuestion">✶ 상황 : 누가 / 언제 / 어디서 / 무엇을 (육하원칙에 따라서 적어주세요)<span>1/7</span></div>
                    <TextArea color={pallette.GREY} width="100%" height="20vh" value={scr4} handleChange={(v)=>{handleChange(v)}}/>
                </Answer>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 5%;
    position : relative;

    & > div {
        font-size : 2.6rem;
        display : flex;
        align-items : center;
    }

    & .subQuestion {
        width : 100%;

        & > span {
            float : right;
        }
    }
`
const Question = styled.div`
    margin : 5vh auto;
    background-color : ${lighten(0.4, pallette.YELLOW)};
    width : 85%;
    padding : 2.5vmax;
    display : flex;
    justify-content : center;
`
const Answer = styled.div`
    margin : 0 auto;
    width : 85%;
    flex-direction : column;
    align-items : unset !important;

    & > div {
        margin : 2vh 0;
    }
`

export default Scr4;