import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import QuizBox from "../../components/quizBox";

const Scr14 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    
    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,14)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <QuizBox style={{height : "60vh"}} answer={4}>
                    <Question bullet={"02."}>
                        <div>대학생인 조은씨는 학기 중 공황 증상이 발생하여 휴학하였습니다.</div>
                        <div>휴학 기간동안 다행히도 증상이 많이 호전되어서 설레는 마음으로 다시 등교를 시작했지만 얼마 안가서 공황 증상이 재발하였습니다.</div>
                        <div>완전히 공황 증상이 없어졌을거라 생각한 조은씨는 공황이 재발했기 때문에 다시 치료를 받아도 소용이 없을 것이라고 생각하며 자퇴를 고민하고 있습니다.</div>
                        <div>조은씨가 가지고 있는 생각의 오류는 무엇인가요?</div>
                    </Question>
                </QuizBox>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;

    & > div {
        font-size : 2.6rem;
        display : flex;
        align-items : center;
    }

    & > .subQuestion {
        padding-bottom : 2vh;
    }
`
const Question = styled.div`
    position : relative;
    margin-left : 3ch;
    font-size : 2.0rem;

    &:before {
        content : "${props=>props.bullet}";
        position : absolute;
        left : -3ch;
    }
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

export default Scr14;