import { useEffect, useState } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import Lottie from "react-lottie";
import * as running from "../assets/lottie/run.json";
import * as running2 from "../assets/lottie/run2.json";
import pallette from "../styles/pallette.css";

const ScoreBox = ({
    good = 0,
    bad = 0,
}) => {

    return (
        <>
            <Scene>
                <LottieWrapper score={bad}>
                    <Lottie options={getOption(running)} />
                </LottieWrapper>
                <Road color={lighten(0.4, pallette.BLUE)} score={bad} />
            </Scene>
            <Scene>
                <LottieWrapper score={good}>
                    <Lottie options={getOption(running2)} />
                </LottieWrapper>
                <Road color={pallette.VIOLET} score={good} />
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
`
const LottieWrapper = styled.div`
    width : 15%;
    min-width : 80px;
    aspect-ratio : 1;
    transform : translateX(-50%);
    margin-left : ${props=>`calc(100% / 11 * ${props.score})`};
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

export default ScoreBox;