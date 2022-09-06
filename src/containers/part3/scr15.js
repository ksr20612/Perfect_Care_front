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
            <Box>
                <QuizBox style={{height : "60vh"}} answer={2} exp={"완벽주의자의 특징 중 하나인 ‘전부아니면 전무의 사고’로도 불리는 흑백논리의 오류는 완벽주의자의 기준에 맞지 않으면 그 과정도 전부 실패로 간주해버리는 인지오류입니다. 유학생활의 어려움으로 인해 도중에 포기하긴 했지만, 분명히 그 기간 속에서 배운 점도 있을 것입니다. 하지만 창훈씨는 ‘학과생활을 다 마쳐야만’ 유학에 ‘성공’한 것이기 때문에 스스로를 실패한 사람으로 보고 있습니다."}>
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
    padding-top : 5%;
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
    font-size : 2.5rem;
    line-height : 150%;
    word-break : keep-all;

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