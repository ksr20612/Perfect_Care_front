import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr2 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,2)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                편의점 아르바이트를 하는 Y양은 <br/>
                현금 정산을 하다 자신이 실수로 손님에게 거스름돈을 더 많이 <br/>
                내어주었다는 사실을 알아차리게 됩니다.
            </Box>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.5}>
                이미 지나간 일이고 손님을 찾을 수도 없기에 <br/>
                이성적으로는 어떻게 할 수 없는 일인 것을 알고 있었지만, <br/>
                자신이 가게에 금전적 손해를 입혔다는 사실과 터무니없는 실수를 했다는 <br/>
                사실에 자책을 하며 30분째 이 생각에서 벗어나지 못하고 있습니다.
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Regular";
    font-size : 3.2rem;
    letter-spacing : -0.64px;
    width : 100%;
    text-align : center;
    margin-top : 15vh;

    &:last-of-type {
        margin-top : 5vh;
    }
`

export default Scr2;