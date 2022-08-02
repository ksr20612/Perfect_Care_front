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
import { usePage } from "../../hooks/usePage";
import Icon1 from "../../assets/ic_brin_blu.png"; 
import Icon2 from "../../assets/ic_puzzle.png";
import Icon3 from "../../assets/ic_bal.png";
import Icon4 from "../../assets/vision-svgrepo-com.png";

const Scr11 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,11)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Subtitle>
                        사실 이말들이 범인! 왜곡된 생각인 <span>인지오류</span>들입니다. <br/>
                        어떤 특징이 있는지 살펴볼까요?
                </Subtitle>
                <div>
                    <Note></Note>
                    <Bubbles>
                        <Bubble title="재앙화 사고" icon={Icon1} content={`이번 시험도 망치다니, \n 내 대학 입시는 망했어.`}></Bubble>
                        <Bubble title="흑백논리" icon={Icon2} content={`1등이 아니면 의미없지.`}></Bubble>
                        <Bubble title="당위 진술" icon={Icon3} content={`아무리 바빠도 \n 운동은 매일 해야해.`}></Bubble>
                        <Bubble title="지나친 일반화" icon={Icon4} content={`지난번 발표때 실수했으니까 \n 오늘도 분명 실수할거야.`}></Bubble>
                    </Bubbles>
                </div>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height : 70%;
    margin-top : 5%;

    & > div:first-child {
        width : 100%;
        height : auto;

        /* & > div:last-child {
            display : flex;
            width : 100%;
            justify-content : center;
            
            & > div:first-child { margin-right : 1vw; }
        } */
    }
    & > div:last-child {
        display : flex;
        width : 100%;
        flex : 1;
        align-items : center;
        justify-content : center;
        margin-top : 3%;
    }
`
const Subtitle = styled.div`
    font-size : 3.0rem;
    width : 100%;
    text-align : center;

    & > span {
        font-size : 4.0rem;
        font-weight : bolder;
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
    height : 100%;
    font-size : 2.4rem;

    /* & > div {
        margin : 5%;
        padding : 5%;
        word-break : keep-all;
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;
        background-color : ${pallette.GREY};
        border-radius : 10%;
    } */
`

export default Scr11;