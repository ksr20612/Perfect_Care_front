import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import HeadImg from "../../assets/img_per.png";
import Brain from "../../components/brain";
import Pattern1 from "../../assets/diagram.png";
import Pattern2 from "../../assets/greengram.png";
import Dots from "../../assets/dots.png";

const Scr2 = () => {

    const [emotions, setEmotions] = useState([]);

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,2)}/>
            <Box>
                <Head>
                    <Brain emotions={emotions}></Brain>
                </Head>
                <Shadow/>
                <PatternPurple/>
                <PatternGreen/>
                <DotGroup/>
                <Circle1/>
                <Circle2/>
            </Box>
        </>
    )
}

const Box = styled(Paper)`
    position : absolute;
    width : 691px;
    height : 524px;
    display : flex;
    justify-content : center;
    align-items : center;
`
const Head = styled.div`
    width : 100%;
    height : 100%;
    background : url(${HeadImg});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center center;
    position : relative;
    z-index : 3;
`
const Shadow = styled.div`
    background-color : #DDDBD7;
    width : 80%;
    height : 8%;
    border-radius : 50%;
    position : absolute;
    z-index : 1;
    bottom : 4%;
    left : 10%;
`
const PatternPurple = styled.div`
    width : 13%;
    height : 13%;
    background : url(${Pattern1});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 10%;
    left : 20%;
`
const PatternGreen = styled.div`
    width : 30%;
    height : 30%;
    background : url(${Pattern2});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 58%;
`
const DotGroup = styled.div`
    width : 9%;
    height : 30%;
    background : url(${Dots});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 77%;
`
const Circle1 = styled.div`
    width : 5%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 23%;
    left : 16%;
    aspect-ratio : 1 / 1;
    opacity : 0.2;
`
const Circle2 = styled.div`
    width : 2.8%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 26.5%;
    left : 18.5%;
    aspect-ratio : 1 / 1;
    opacity : 0.3;
`

export default Scr2;