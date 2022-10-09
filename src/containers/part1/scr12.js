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
import BackImg from "../../assets/img1_12.jpg";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr11 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,12)}/>
            <Box>
                <Img></Img>
                <Message>
                    <strong>
                        "조금 더 열심히 해야해." <br/>
                        "실수하면 안돼." <br/>
                        "지난번엔 왜 그렇게 했지?" <br/>
                    </strong> <br/> <br/>
                    나를 괴롭히는 완벽주의에서 벗어나고 싶을 때. <br/>
                    완벽주의의 장점을 살리고 단점을 줄이기 위해 <br/>
                    나의 진짜 모습과 마주하세요. <br/>
                </Message>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    height : 70vh;
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const Img = styled.div`
    background-image : url(${BackImg});
    width : 80%;
    height : 50%;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    margin : 5% auto 5%;
`
const Message = styled.div`
    text-align : center;
    font-size : 2.0rem;
    word-break : keep-all;

    & > strong {
        font-size : 2.4rem;
        font-style : italic;
    }
`

export default Scr11;