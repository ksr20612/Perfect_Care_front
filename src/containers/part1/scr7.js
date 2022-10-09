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
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr6 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,7)}/>
            <Box>
                내가 환자들에게 현재 경험하고 있는 심리 문제의 원인이 <br/>
                ‘완벽주의’에 기인한 것이라 이야기하면 <br/>
                환자들은 십중팔구 이렇게 반응한다. <br/><br/>

                <div style={{fontStyle : "italic", fontWeight : "bolder"}}>“선생님, 저는 완벽주의자가 아닌데요? <br/>
                저는 그렇게 철두철미하고 목표가 높은 사람이 아니에요.”</div><br/>

                하지만 바로 이 지점에서 문제가 발생한다. <br/>
                많은 이들이 ‘완벽주의자’라 하면 모든 면에서 뛰어난, <br/> 
                실수 하나 없는 사람을 떠올린다. <br/>
                그런 오해로 결국 자신이 겪고 있는 문제에 제대로 다가가지 못하고, <br/> 
                해결책도 마련할 수 없게 되는 것이다. <br/><br/>

                <div>{`<오늘도 시작하지 못하는 당신을 위해> 중`}</div> 
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