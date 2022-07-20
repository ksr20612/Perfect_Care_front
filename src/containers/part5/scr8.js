import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";

const Scr8 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,8)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Subtitle>완벽은 완전히 없애는 것이 아니라 "케어"하는 것.</Subtitle>
                <Content>
                    <div>진료실엔 완벽주의자들이 많이 찾아옵니다.</div>
                    <div>대부분 우울, 불안, 공황 등의 증상을 호소하며 찾아오지만,</div>
                    <div>진짜 문제인 완벽주의를 간과하는 경우가 많습니다.</div>
                    <div>그동안 완벽주의적인 성향으로 인해</div>
                    <div>일상생활에서 번아웃이 오거나, 자책하며 힘들어했을</div>
                </Content>
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    font-size : 2.4rem;
`
const Subtitle = styled.div`
    font-size : 3.6rem;
    font-weight : bold;
    margin-bottom : 10%;
`
const Content = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    line-height : 200%;
`

export default Scr8;