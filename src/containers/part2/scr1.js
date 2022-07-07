import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import CheckBlue from "../../assets/check_blue.png";

const Scr1 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="지난 파트 돌아보기"/>
            <Box>
                <div>나의 완벽주의는 이런 모습이었어요.</div>
                <div>나는 <Data></Data> 을 느낀다고 응답했어요.</div>
                <div>
                    내가 바꾸고 싶은 완벽주의의 모습은
                </div>
                <Data className="ans2"></Data>
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
        display : relative;
        margin-top : 4vh;

        &:before {
            content : "";
            display : absolute;
            width : 8vmax;
            height : 8vmax;
            background-image : url(${CheckBlue});
            background-size : contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin-right : 1vw;
        }
    }
`
const Data = styled.span`
    width : 8vw;
    height : 8vh;
    display : inline-block;
    background-color : ${pallette.BLUISH};
    border-radius : 1.5vmin;
    margin : 0 1ch;

    &.ans2 {
        position : absolute;
        display : block;
        width : 60vw;
        max-width : 840px;
        height : 12vh;
        margin-left : calc(8vmax + 2vmax);
    }
`

export default Scr1;