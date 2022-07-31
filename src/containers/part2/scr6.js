import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Image from "../../assets/sample.jpg";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr6 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Img src={Image} alt="이미지"/>
                <Content>
                    <div>어떤 일을 맡으면 부담감부터 들고 숨이 막히지 않으셨나요?</div>
                    <div>왜 이렇게 나 혼자 바쁘고 힘들까 생각하셨나요?</div>
                    <div>나도 모르게 세웠던 가혹한 기준이 </div>
                    <div>나의 발목을 잡고 있지는 않았는지 되돌아보아요.</div>
                    <div>삐뚤삐뚤해도 그대로 괜찮은,</div>
                    <div>[완벽]보다 작은 것부터 <span>[시작하기]</span>를 목표로 해볼까요?</div>
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    display : flex;
    height : calc(100% - 8vh);
`
const Img = styled.img`
    width : 40%;
    height : 100%;
`
const Content = styled.div`
    width : 60%;
    padding : 2vmax;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    font-size : 2.4rem;

    & > div { 
        width : 100%;
        text-align : center;
        word-break : keep-all;
    }
    & span {
        background : linear-gradient(to right, ${pallette.YELLOW}, ${pallette.YELLOW});
        color : ${pallette.WHITE};
    }
`

export default Scr6;