import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr7 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,7)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Name>PIXAR의 실패 갤러리</Name>
                <Content>
                    <div></div>
                    <div>
                        세계적인 애니메이션 스튜디오인 픽사에서는 캐릭터 디자인, 컨셉아트 등 영화로 만들어지지 않았거나 실패했던 작품들을 전시합니다. <br/><br/>
                        비록 사용되지 않았지만 실패조차 하나의 예술 작품으로서의 가치를 인정하는 것이죠. 
                    </div>
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    margin-top : 8vh;
    padding-left : min(95px, 5vw);
    text-align : center;
`
const Name = styled.div`
    font-size : 3.6rem;
    font-family : "Medium";
    margin-bottom : 3vh;
    width : 100%;
`
const Content = styled.div`
    font-size : 2.0rem;
    font-family : "Regular";
    color : ${pallette.NEWBLACK};
    display : flex;
    justify-content : space-between;

    & > div:first-of-type {
        width : 303px;
        height : 316px;
        background-size : contain;
        background-position : center center;
        background-repeat : no-repeat;
    }

    & > div:last-of-type {
        width : 381px;
        height : auto;
        text-align : left;
        padding-top : 5vh;
        word-break : keep-all;
    }
`

export default Scr7;