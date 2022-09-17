import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";

const Scr8 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,8)}/>
            <Box>
                <Subtitle>완벽은 완전히 없애는 것이 아니라 "케어"하는 것</Subtitle>
                <Content>
                    완벽주의자들은 완벽이 타고난 것이고 바뀔 수 없는 성격이라고 생각합니다. <br/>
                    하지만 건강한 완벽주의는 키우고, 건강하지 못한 완벽주의는 줄이는 방향으로 케어해야 합니다. <br/> 
                    느슨하고 단단한 심리는 여러분을 완벽한 성과에 조금씩 가까이 가도록 도와줄 것입니다.
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 15vh;
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
    text-align : center;
    word-break : keep-all;
`

export default Scr8;