import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";

const Scr1 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="지난 파트 돌아보기"/>
            <Box>
                <div>나에게 이런 기준이 있었어요.</div>
                <Data></Data>
                <div>이전 기준을 이렇게 변경해 보았어요.</div>
                <Data></Data>
                <span>나의 가혹한 기준을 변경했다면, 이제 근본적인 원인을 바꾸러 가볼까요?</span>
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

        &:not(:last-of-type){
            margin-top : 4vh;
        }

        &:before {
            content : "";
            display : absolute;
            width : 8vmax;
            height : 8vmax;
            background-color : ${pallette.GREY};
            margin-right : 1vw;
        }
    }

    & > span:last-of-type {
        font-size : 3.2rem;
        display : inline-block;
        width : 100%;
        text-align : center;
        padding-top : 4vh;
    }
`
const Data = styled.span`
    width : 60vw;
    height : 16vh;
    display : inline-block;
    background-color : ${pallette.BLUISH};
    border-radius : 1.5vmin;
    margin : 0 0 0 10vw;
    
`

export default Scr1;