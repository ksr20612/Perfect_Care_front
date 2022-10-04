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
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr8 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,9)}/>
            <Box>
                <div>
                    부정적 감정도 때로는 필요합니다.
                </div>
                <div>
                    부정적 감정을 완벽히 없애고자 하는 <strong>감정적 완벽주의</strong>를 경계해야 합니다.
                </div>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
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