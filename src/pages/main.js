import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import topImg from "../assets/bg_cir_02.png";
import bottomImg from "../assets/bg_cir.png";
import Doctor from "../assets/doctor_01.png";
import Logo from "../assets/logo.png";
import LogoImg from "../assets/ic_health Care.svg";
import ChartImg from "../assets/ic_medi.png";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const curPage = useSelector(state => state.page.pageIdx);
    const token = useSelector(state=>state.state.token);
    const navigate = useNavigate();
    const handleStart = () => {
        navigate("/0");
    }

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
                <Chart/>
                <Content>
                    <Title>Perfect <img src={LogoImg} alt="YD 로고" /> Care</Title>
                    <Subtitle>
                        <div>완벽을 관리하다</div>
                        <div>퍼펙트 케어</div>
                        <div>완벽도 완벽하게 관리해야 하니까</div>
                        <List>
                            <Li><span>Part 01.</span><span>: 완벽 마주하기</span></Li>
                            <Li><span>Part 02.</span><span>: 가혹한 기준의 덫</span></Li>
                            <Li><span>Part 03.</span><span>: 완벽 관리하기</span></Li>
                            <Li><span>Part 04.</span><span>: 실수가 너무 두려워요</span></Li>
                            <Li><span>Part 05.</span><span>: 완벽을 버릴 때 완벽에 가까워진다</span></Li>
                        </List>
                    </Subtitle>
                </Content>
                <ButtonWrapper>
                    <Start onClick={()=>handleStart()}>시작하기</Start>
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
    margin-top : 7%;
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
    margin-bottom : 1%;
    z-index : 99;
    text-shadow : 0px 3px 6px #00000029;
    display : flex;
    align-items : center;

    & > img {
        padding : 1%;
    }

`
const Subtitle = styled.div`
    z-index : 99;
    font-family : "Regular";
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
        font-family : "Bold";
    }
    & > div:nth-child(3) {
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
            opacity : 0.5;
            border-top : 2px solid #a67744;
            transform : translate(-38px, 50%);
        }
    }
`
const List = styled.div`
    margin-top : 3%;
    font-size : 2.8rem;
    font-family : "SemiBold";
    margin-left : 0.5%;
    text-transform : uppercase;
    position : relative;
    & > div + div {
        margin-top : 1%;
    }

    & > div:nth-child(2n-1) {
        color : #8FB9AB;
    }
    & > div:nth-child(2n) {
        color : #547665;
    }
`
const Li = styled.div`
    display : flex;
    align-items : center;
    & > span {
        display : inline-block;
        
        &:first-child {
            width : 10%;
            min-width : 130px;
        }
        &:last-child {
            color : #292724;
            font-size : 2.0rem; 
            font-family : "Medium";
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
    background-size : contain;
    background-position : bottom 0 right -6vw;
    z-index : 1;
`
const BigCircle = styled.div`
    position : absolute;
    width : 35%;
    aspect-ratio : 1;
    max-width : 342px;
    max-height : 342px;
    box-shadow : #A6774494 10px 10px 30px;
    border-radius : 50%;
    background : url(${Doctor}) #f3d096;
    background-size : 90%;
    background-repeat : no-repeat;
    background-position : bottom 0 left 38%;
    z-index : 99;
    top : 15%;
    right : 15%;

    &:before {
        content : ""; 
        position : absolute;
        width : 9vh;
        height : 9vh;
        min-width : 88px;
        min-height : 88px;
        background-image: url(${Logo}); 
        background-image : url(${Logo}), linear-gradient(
            150deg,
            hsl(53deg 52% 94%) 0%,
            hsl(53deg 63% 92%) 1%,
            hsl(53deg 71% 91%) 1%,
            hsl(53deg 77% 90%) 2%,
            hsl(53deg 82% 89%) 3%,
            hsl(53deg 86% 88%) 4%,
            hsl(53deg 90% 87%) 6%,
            hsl(53deg 93% 86%) 7%,
            hsl(53deg 95% 85%) 9%,
            hsl(53deg 97% 84%) 11%,
            hsl(53deg 99% 82%) 14%,
            hsl(53deg 100% 81%) 16%,
            hsl(49deg 97% 76%) 20%,
            hsl(45deg 95% 72%) 24%,
            hsl(41deg 95% 68%) 29%,
            hsl(38deg 96% 64%) 35%,
            hsl(36deg 97% 60%) 42%,
            hsl(33deg 97% 57%) 51%,
            hsl(30deg 98% 53%) 63%,
            hsl(28deg 100% 50%) 75%,
            hsl(23deg 100% 50%) 86%,
            hsl(16deg 100% 50%) 94%,
            hsl(4deg 100% 50%) 100%
        );
        background-repeat : no-repeat;
        background-position : center 1px;
        background-size : contain;
        z-index : 2;
        top : calc(-12% + min(18px, 1vh));
        right : calc(5.5% + min(18px, 1vh));
        border-radius : 50%;
    }
`
const Black = styled.div`
    width : 11px;
    height : 11px;
    border-radius : 50%;
    position : absolute;
    bottom : 8%;
    right : 8%;
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

    &:after {
        content : "";
        position : absolute;
        width : 58px;
        height : 58px;
        border-radius : 50%;
        border : 10px solid #A67744;
        background-color : transparent;
        box-sizing : border-box;
        opacity : 0.1;
        top : -30%;
        left : 30%;
    }
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
    opacity : 0.4;
`
const Chart = styled.div`
    background : url(${ChartImg});
    width : 50%;
    height : 40%;
    background-size: contain;
    background-position : bottom -5vh right -6vw;
    background-repeat : no-repeat;
    position : absolute;
    bottom : 0;
    right : 0;
`

export default Main;