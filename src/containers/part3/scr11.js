import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Guru from "../../components/guru";
import Bubble from "../../components/bubble";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import NoteImg from "../../assets/ic_memo_y_02.png";

const Scr11 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,11)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>
                    <Note>용의자인 자동사고를 찾았다면 이 사고가 정말로 완벽주의를 강하게 만든 범인인지 살펴보아요!</Note>
                </div>
                <div>
                    <Subtitle>평소에 자주하는 말이나 생각과 <br/> 비슷한 것을 골라 <span>클릭</span>해보세요.</Subtitle>
                    <Bubbles>
                        <Bubble title="재앙화 사고" content={`이번 시험도 망치다니, \n 내 대학 입시는 망했어.`}></Bubble>
                        <Bubble title="흑백논리" content={`1등이 아니면 의미없지.`}></Bubble>
                        <Bubble title="당위 진술" content={`아무리 바빠도 \n 운동은 매일 해야해.`}></Bubble>
                        <Bubble title="지나친 일반화" content={`지난번 발표때 실수했으니까 \n 오늘도 분명 실수할거야.`}></Bubble>
                    </Bubbles>
                </div>
            </Box>
        </>
    )
}

const Box = styled.div`
    display : flex;
    align-items : center;
    width : 100%;
    height : 70%;
    margin-top : 5%;

    & > div:first-child {
        width : 30%;
        height : 100%;

        & > div:last-child {
            display : flex;
            width : 100%;
            justify-content : center;
            
            & > div:first-child { margin-right : 1vw; }
        }
    }
    & > div:last-child {
        width : 70%;
        height : 100%;
    }
`
const Subtitle = styled.div`
    font-size : 2.4rem;
    font-family : "Noto_Medium";
    width : 100%;
    text-align : center;
    margin : 4vh 0;

    & > span {
        text-decoration : underline;
        text-underline-offset : 5px;
    }
`
const Note = styled.div`
    background : url(${NoteImg});
    font-size : 2.4rem;
    word-break : keep-all;
    text-align : center;
    padding-top : 30%;
    padding-bottom : 10%;
    padding-left : 10%;
    padding-right : 10%;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
`
const Bubbles = styled.div`
    display : grid;
    grid-template-rows : 1fr 1fr;
    grid-template-columns : 1fr 1fr;
    width : 100%;
    height : 80%;
    font-size : 2.4rem;

    & > div {
        margin : 5%;
        padding : 5%;
        word-break : keep-all;
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;
        background-color : ${pallette.GREY};
        border-radius : 10%;
    }
`

export default Scr11;