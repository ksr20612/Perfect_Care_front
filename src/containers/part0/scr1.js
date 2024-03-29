import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";

const Scr1 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    return (
        <>
            <Title title={getPartTitle(0)} subTitle={getPageTitle(0,1)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                
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
    font-size : 3.2rem;
`

export default Scr1;