import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";

const Scr6 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,6)}/>
            <Box>
                “완벽주의자는 현실을 거부하고 환상의 세계에서 산다. <br/>
                그가 사는 세계에서는 실패나 고통스러운 감정은 없다. <br/>
                그들의 성공 기준은 아무리 비현실적이라고 해도 충족시켜야 하는 것이다. <br/>
                그 결과, 매우 값비싼 감정적 대가를 치른다. <br/>
                실패를 거부하므로 언제 실패할지 모른다는 불안감에 시달린다. <br/>
                고통스러운 감정을 거부하고 억누를수록 오히려 더 큰 고통을 겪는다. <br/>
                현실 세계의 한계와 제약을 거부하므로 <br/>
                비현실적이고 달성 불가능한 성공 기준을 정한다. <br/>
                당연히 그 기준에 이를 수 없다. <br/>
                결국 끊임없이 좌절과 자괴감만 맛본다.” <br/>
                <div>-[완벽주의자를 위한 행복수업] 중-</div>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    padding : 5vh;
    margin-top : 10vh;
    font-size : 2.0rem;
    line-height : 150%;

    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    text-align : center;
    height : 60%;

    & strong {
        color : ${pallette.RED};
    }

    & > div:last-child {
        margin-top : 3%;
        font-style : italic;
    }
`

export default Scr6;