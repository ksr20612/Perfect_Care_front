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
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr14 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    
    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,14)}/>
            <Box>
                <QuizBox style={{height : "60vh"}} answer={4} exp={"물론 한번의 기억이 크게 남아 다음번 치료가 두려운 것은 당연한 것이지만, 분명히 호전된 경험이 있음에도 불구하고 재발하였다는 사실로 인해 치료가 소용없다고 치부해버리는 것은 지나친 일반화의 오류입니다. 비록 공황이 재발하였지만 이전과 비교해볼 때 그 빈도가 조금 더 적어졌을 수도 있고, 이전과 다르게 대처할 수도 있기 때문입니다."}>
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

export default Scr14;