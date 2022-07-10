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

const Scr4 = () => {

    const scr4 = useSelector(state=>state.part3.information.scr4);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr4(v)));
    }

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,4)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>내가 당황스러워했던 사건 뒤에는 나의 자동사고가 숨어있다.</div>
                <div>형사가 되어 자동사고라는 용의자를 잡아보자!</div>
                <Question as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1}>
                    최근에 경험했던 당황스러웠거나, 불안했던 상황을 생각하며 적어보세요.
                </Question>
                <Answer as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1}>
                    <div className="subQuestion">✶ 상황 : 누가 / 언제 / 어디서 / 무엇을 <span>1/7</span></div>
                    <TextArea color={pallette.GREY} width="100%" height="20vh" value={scr4} handleChange={(v)=>{handleChange(v)}}/>
                </Answer>
                {/* <GuruBox /> */}
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
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