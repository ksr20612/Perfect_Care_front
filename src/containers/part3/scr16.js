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
                <QuizBox style={{height : "60vh"}} answer={4} exp={"우리는 종종 '첫인상을 망치면 난 무리에 끼지 못할거야.', '이번 소개팅도 성공하지 못하면 난 죽을때까지 혼자 살지도 몰라.', '돈이 없으면 길거리에 나앉게 될거야.'과 같은 부정적인 결론을 내놓기도 합니다. 이처럼 현재 상황과 다른 가능성을 고려하지 않고 비합리적인 결말을 먼저 상상하는 것은 재앙화 (혹은 파국화)라고 합니다. "}>
                    <Question bullet={"04."}>
                        <div>기업의 CEO인 상규씨는 20대때부터 사업을 해오며 여러 사업체를 키워, 5년 전부터는 안정적인 생활을 해오고 있습니다.</div>
                        <div>하지만 생활이 안정적일수록 오히려 갑작스레 사업에 문제가 생겨 이 생활이 무너지진 않을까 노심초사하며 최악의 상황을 상상하는 등 불안이 더욱 커져만 가고 있습니다.</div>
                        <div>상규씨가 가지고 있는 생각의 오류는 무엇인가요?</div>
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