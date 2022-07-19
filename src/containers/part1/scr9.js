import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr9 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,7)}/>
            <Box>

            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    width : 95%;
    margin : 0 auto;
    margin-top : 4vh;
    position : relative;
`
const Line = styled.div`
    width : 100%;
    margin : 0 auto;
    padding : 2vmin;
    font-size : 4.0rem;
    padding-left : 4vmin;

    &:first-of-type {
        margin-top : 5vh;
    }
`

export default Scr9;