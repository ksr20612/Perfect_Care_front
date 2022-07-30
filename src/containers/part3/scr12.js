import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import MovieClip from "../../components/movieClip";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";

const Scr2 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,12)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <MovieClip width="100%" height="100%"/>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled(Paper)`
    padding : 5%;
    margin-top : 5%;
    display : flex;
    height : 70%;
    align-items : center;
    justify-content : center;

    & > div {
        font-size : 2.6rem;
        width : 80%;
        height : 100%;
    }
`

export default Scr2;