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

const Scr5 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    return (
        <>
            <Title title={getPartTitle(0)} subTitle={getPageTitle(0,1)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                The basics of CBT
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 10vh;
    display : flex;
    align-items : center;
    justify-content : center;

    & > div {
        font-size : 2.6rem;
        width : 80%;
        height : 40vh;
    }
`

export default Scr5;