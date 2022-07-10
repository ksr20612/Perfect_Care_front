import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import SamplePic from "../../assets/sample.jpg";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr3 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,3)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>
                    <div>내가 당황스러워했던 사건 뒤에는 나의 자동사고가 숨어있습니다.</div>
                    <div>형사가 되어 자동사고라는 용의자를 잡아봅시다.</div>
                </div>
                <motion.div initial="hidden" animate="visible" variants={fadein} custom={1.5}>
                    <div>이런 걸 작성할 거예요!</div>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={2}>1. 상황</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={2.5}>2. 기분</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={3}>3. 생각</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={3.5}>4. 이미지</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={4}>5. 나는 어떤 사람?</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={4.5}>6. 최악의 경우</Block>
                </motion.div>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
    display : flex;

    & > div {
        font-size : 2.6rem;
        display : flex;
        flex-direction : column;
        align-items : center;
        word-break : keep-all;
        text-align : center;

        &:first-of-type {
            width : 50%;
        }
        &:last-of-type {
            width : 50%;
        }
    }

`
const Block = styled.div`
    transform : translateY(5vh);
    scroll-snap-align: center;
    background-color : ${lighten(0.5, pallette.BLUE)};
    width : 80%;
    height : auto;
    margin : 1vmin;
    padding : 1vmin;
    border-radius : 1vmin;
    font-size : 1.6rem;
    font-family : "Noto_Black";
    color : #333;
    box-shadow : 0px 3px 6px #00000029;
`

export default Scr3;