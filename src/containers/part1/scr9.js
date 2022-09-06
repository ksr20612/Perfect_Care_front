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
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";

const Scr9 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,9)}/>
            <Box>
                <MovieClip width="100%" height="100%" videoId="B2mPw4lX5mo" />
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 5%;
    display : flex;
    height : 70%;
    align-items : center;
    justify-content : center;

    & > div {
        font-size : 2.6rem;
        width : 100%;
        height : 100%;
    }
`

export default Scr9;