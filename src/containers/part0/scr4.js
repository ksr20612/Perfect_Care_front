import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import MovieClip from "../../components/movieClip";
import { usePage } from "../../hooks/usePage";
import effective from "../../assets/effective.svg";
import professional from "../../assets/professional.svg";
import reasonable from "../../assets/reasonable.svg";
import easy from "../../assets/easy.svg";

const Scr4 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    return (
        <>
            <Title title={getPartTitle(0)} subTitle={getPageTitle(0,1)}/>
            <Ask>디지털 인지행동치료란?</Ask>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Subtitle>어디서나, 손쉽고 간편하게</Subtitle>
                <Content>
                    <div>
                        <Icon icon={professional}></Icon>
                        <div>1.전문적입니다</div>
                    </div>
                    <div>
                        <Icon icon={reasonable}></Icon>
                        <div>2.합리적입니다</div>
                    </div>
                    <div>
                        <Icon icon={easy}></Icon>
                        <div>3.편리합니다</div>
                    </div>
                    <div>
                        <Icon icon={effective}></Icon>
                        <div>4.효과적입니다</div>
                    </div>
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5%;
    display : flex;
    flex-direction : column;
    align-items : center;
    height : 65%;
`
const Ask = styled.div`
    font-size : 3.6rem;
    width : 100%;
    text-align : center;
    margin-top : 5%;
`
const Subtitle = styled.div`
    font-size : 3.6rem;
    &:first-letter { font-size : 150% }
`
const Content = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    grid-template-rows : repeat(2, 1fr);

    & > div {
        padding : 5%;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        font-size : 2.0rem;

        & > div:last-child {
            &:first-letter { font-size : 150%; }
        }

    }
`
const Icon = styled.div`
    width : 60%;
    height : 60%;
    margin-bottom : 3%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-image : url(${props=>props.icon});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center;
`

export default Scr4;