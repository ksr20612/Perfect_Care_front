import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import topImg from "../assets/bg_cir_02.png";
import bottomImg from "../assets/bg_cir.png";
import Doctor from "../assets/doctor_01.png";
import { ReactComponent as CircleBlack } from "../assets/circle_black.svg";
import { ReactComponent as CircleBlue } from "../assets/circle_blue.svg";
import { ReactComponent as CirclePurple } from "../assets/circle_purple.svg";
import { ReactComponent as CircleRed } from "../assets/circle_red.svg";

const Main = () => {

    const curPage = useSelector(state => state.page.pageIdx);
    const token = useSelector(state=>state.state.token);

    useEffect(()=>{
        console.log(token);
    })

    return (
        <Wrapper>
            <Box>
                <TopImg/>
                <BottomImg/>
                <BigCircle/>
                <Black></Black>
                <Blue></Blue>
                <Purple></Purple>
                <Red></Red>
                <Content>
                    <Title>Perfect <span>@</span> Care</Title>
                    <Subtitle>
                        <div>완벽을 관리하다</div>
                        <div>퍼펙트 케어</div>
                        <div>완벽도 완벽하게 관리해야 하니까</div>
                    </Subtitle>
                </Content>
                <ButtonWrapper>
                    <Start>시작하기</Start>
                </ButtonWrapper>
            </Box>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    background-color : white;
    z-index : 1;
`
const Box = styled.div`
    max-width : 1180px;
    width : 80%;
    height : 100%;
    position : relative; 
    background-color : #f9f8f7;
    z-index : 2;
`
const Content = styled.div`
    margin-top : 10%;
    margin-left : 10%;
    z-index : 99;
`
const Title = styled.div`
    font-size : 6.0rem;
    color : #354e57;
    font-family : "Bold";
    text-transform : uppercase;
    letter-spacing : -0.42px;
    line-height : 50px;
    margin-bottom : 3%;
    z-index : 99;
`
const Subtitle = styled.div`
    z-index : 99;
    & > div:first-child {
        font-size : 3.2rem;
        color : #292724;
        line-height : 28px;
        letter-spacing : -0.64px;
    }
    & > div:nth-child(2) {
        font-size : 4.8rem;
        color : #292724;
        line-height : 50px;
        letter-spacing : -0.34px;
    }
    & > div:last-child {
        margin-top : 3%;
        margin-left : 38px;
        color : #b1b0af;
        font-size : 1.7rem;
        position : relative;

        &:before {
            content : "";
            position : absolute;
            width : 30px;
            height : 1.7rem;
            color : #a67744;
            border-top : 2px solid #a67744;
            transform : translate(-38px, 50%);
        }
    }
`
const ButtonWrapper = styled.div`
    width : 100%;
    position : absolute;
    bottom : 15%;
    display : flex;
    justify-content : center;
`
const Start = styled.div`
    font-size : 2.8rem;
    color : #FFFFFF;
    display : flex;
    align-items : center;
    justify-content : center;
    width : 337px;
    height : 62px;
    background-color : #547665;
    border-radius : 55px;
    position : relative;
    transition : background-color 0.3s ease-in-out;
    z-index : 99;

    &:hover {
        background-color : ${darken(0.1, "#547665")}
    }

    &:after {
        content : "";
        position : absolute;
        inset : -5px;
        border : 1px dashed #b1b0af;
        border-radius : 55px;
    }
`
const TopImg = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    background : url(${topImg});
    width : 100%;
    height : 100%;
    background-repeat : no-repeat;
    /* background-size : cover; */
    z-index : 1;
`
const BottomImg = styled.div`
    position : absolute;
    top : 0;
    background : url(${bottomImg});
    width : 100%;
    height : 100%;
    background-repeat : no-repeat;
    background-size : cover;
    z-index : 1;
`
const BigCircle = styled.div`
    position : absolute;
    width : 30vh;
    height : 30vh;
    min-width : 342px;
    min-height : 342px;
    box-shadow : #A6774494 10px 10px 30px;
    border-radius : 50%;
    background : url(${Doctor}) #f3d096;
    background-size : contain;
    z-index : 99;
    top : 178px;
    left : 590px;
`
const Black = styled.div`
    width : 11px;
    height : 11px;
    border-radius : 50%;
    position : absolute;
    bottom : 10%;
    right : 10%;
    z-index : 98;
    background-color : #354e57;
`
const Blue = styled.div`
    width : 30px;
    height : 30px;
    border-radius : 50%;
    position : absolute;
    bottom : 30%;
    left : 10%;
    z-index : 98;
    background-color : #b1e7e7;
`
const Purple = styled.div`
    width : 22px;
    height : 22px;
    border-radius : 50%;
    position : absolute;
    bottom : 30%;
    right : 15%;
    z-index : 98;
    background-color : #d7ccdd;
`
const Red = styled.div`
    width : 15px;
    height : 15px;
    border-radius : 50%;
    position : absolute;
    bottom : 50%;
    left : 28%;
    z-index : 98;
    background-color : #ee8975;
`

export default Main;