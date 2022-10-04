import { useState, useEffect } from "react";
import styled from "styled-components";
import BackImg from "../../assets/img3_18.jpg";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import Title from "../../components/title";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr17 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3, 18)}/>
            <Img></Img>
            <Message>지금까지 <strong>부정적인 자동사고</strong>가 나를 괴롭히도록 내버려 두었다면, <br/> 이제는 내가 나를 지키는 경찰이 되어 <strong>인지오류를 체포</strong>해보는 것은 어떨까요?</Message>
            {renderArrow()}
        </>
    )
}

const Img = styled.div`
    background-image : url(${BackImg});
    width : 80%;
    height : 60vh;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    margin : 0 auto;
`
const Message = styled.div`
    text-align : center;
    font-size : 3.2rem;
    word-break : keep-all;

    & > strong {
        font-size : 3.4rem;
    }
`

export default Scr17;