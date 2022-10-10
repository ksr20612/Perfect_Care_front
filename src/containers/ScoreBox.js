import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import Lottie from "react-lottie";
import * as running from "../assets/lottie/run.json";
import * as running2 from "../assets/lottie/run2.json";
import pallette from "../styles/pallette.css";
import { motion, AnimatePresence } from "framer-motion";

const ScoreBox = ({
    good = 0,
    bad = 0,
    isDone=false,
}) => {

    useEffect(()=>console.log(isDone));

    return (
        <>
            <Scene>
                <AnimatePresence>
                    <LottieWrapper score={bad} as={motion.div} layout>
                        <Lottie options={getOption(running)} />
                    </LottieWrapper>
                    <Road color={lighten(0.4, pallette.BLUE)} score={bad}/>
                    {isDone && <Result>건강하지 않은 완벽주의자</Result>}
                </AnimatePresence>
            </Scene>
            <Scene>
                <AnimatePresence>
                    <LottieWrapper score={good} as={motion.div} layout>
                        <Lottie options={getOption(running2)} />
                    </LottieWrapper>
                    <Road color={pallette.VIOLET} score={good} />
                    {isDone && <Result>건강한 완벽주의자</Result>}
                </AnimatePresence>
            </Scene>
        </>

    )
}

const getOption = (data) => ({
    loop : true,
    autoplay : true,
    animationData: data,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isStopped : false,
})

const Scene = styled.div`
    width : 100%;
    height : auto;
    position : relative;
`
const LottieWrapper = styled.div`
    width : 10%;
    min-width : 80px;
    aspect-ratio : 1;
    margin-left : ${props=>`calc(100% / 11 * ${props.score})`};
    position : relative;
`
const Road = styled.div`
    width : 100%;
    height : 10%;
    max-height : 50px;
    background-color : ${pallette.GREY};
    position : relative;
    &::before {
        content : "";
        background-color : ${props=>props.color};
        width : ${props=>`calc(100% / 11 * ${props.score})`};
        display : inline-block;
        position : absolute;
        height : 100%;
    }
`
const Result = styled.div`
    position : absolute;
    font-size : 1.6rem;
    background-color : #ccc;
    width : 10%;
    height : 50%;
    text-align : center;
    display : flex;
    align-items : center;
    justify-content : center;
    word-break : keep-all;
    border-radius : 1em;
    font-weight : 700;
    transform : translateY(-150%);
`

export default ScoreBox;