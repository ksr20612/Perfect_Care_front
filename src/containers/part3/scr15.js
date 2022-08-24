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

const Scr15 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,15)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <QuizBox style={{height : "60vh"}} answer={2}>
                    <Question bullet={"03."}>
                        <div>미국으로 유학을 갔던 창훈씨는 유학생활 중, 문화차이와 홀로서기의 어려움을 느꼈습니다.</div>
                        <div>더이상 잘할 수 없을 것 같은 우울감과 불안으로 인해 창훈씨는 결국 한국으로 귀국하였습니다.</div>
                        <div>귀국한 창훈씨는 부모님에 대한 미안함과 학과 생활을 다 마치지 못해 유학 생활을 망쳤다는 생각에 아무 것도 시작하지 못하고 있습니다.</div>
                        <div>창훈씨가 가지고 있는 생각의 오류는 무엇인가요?</div>
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

export default Scr15;