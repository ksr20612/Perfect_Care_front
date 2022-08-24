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

const Scr8 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,8)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>
                    우리의 모든 감정은 생존과 적응을 위한 결과물입니다.
                </div>
                <div>
                    부정적인 감정이 완벽히 없어지길 원하시나요?
                </div>
                <div>
                    이러한 <strong>감정적 완벽주의</strong>를 우리는 가장 경계해야 합니다.
                </div>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 10vh;
    font-size : 3.6rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height : 60%;
    word-break : keep-all;

    & > div {
        text-align : center;
        & + div {
            margin-top : 5%;
        }
    }

    & strong {
        color : ${pallette.RED};
    }
`

export default Scr8;