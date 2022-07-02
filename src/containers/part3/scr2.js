import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";

const Scr2 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라!"/>
            <Box>
                <div>본격적으로 완벽주의를 조절하기 위해서는 <br/> 머릿속에 있는 "자동사고"라는 용의자를 찾아야 합니다.</div>
                <div>내 행동을 만드는 핵심 생각이자, 남의 감정을 좌우하는 자동사고는 내가 완벽주의 성향으로 사고하도록 돕기도 하는데요,</div>
                <div>"자동사고"가 정말로 완벽주의 성향을 만드는 범인일지 한번 조사해볼까요?</div>
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

    & > .subQuestion {
        padding-bottom : 2vh;
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


export default Scr2;