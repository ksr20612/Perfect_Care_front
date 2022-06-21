import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";

const Scr2 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <div>내가 당황스러워했던 사건 뒤에는 나의 자동사고가 숨어있다.</div>
                <div>형사가 되어 자동사고라는 용의자를 잡아보자!</div>
                <Question>
                    최근에 경험했던 당황스러웠거나, 불안했던 상황을 생각하며 적어보세요.
                </Question>
                <div>✶ 상황 : 누가 / 언제/ 어디서 / 무엇을</div>
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
`
const Question = styled.div`
    margin : 5vh auto;
    background-color : ${lighten(0.4, pallette.YELLOW)};
    width : 85%;
    padding : 2.5vmax;
    display : flex;
    justify-content : center;
`


export default Scr2;