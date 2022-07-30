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
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";

const Scr12 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,12)}/>
            <Box>
                <Summary>
                    <Line>나의 완벽주의를 인정하기!</Line>
                    <Line>완벽주의는 "제거"하는 것이 아닌 "케어"하는 것.</Line>
                    <Line>인정하는 것이 한걸음! 솔직한 나의 감정을 인정했다면, 이제부터 본격적인 "완벽케어"를 배워보자.</Line>
                </Summary>
            </Box>
            {renderArrow()}
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

export default Scr12;