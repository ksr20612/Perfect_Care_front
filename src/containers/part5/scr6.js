import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import DataBox from "../../components/dataBox";
import { usePage } from "../../hooks/usePage";

const Scr6 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,6)}/>
            <DataBox title="완벽정리에서 나는..." customStyle={{height : "30vh", maxHeight : "40%"}}>
                <div>#</div>
                <div>#</div>
                <div>#</div>
                <Exp>이러한 완벽주의의 모습을 바꾸고 싶다고 적었어요.</Exp>
            </DataBox>
            <Ask as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.5}>지금의 나는 어떻게 변화했나요?</Ask>
            {renderArrow()}
        </>
    )
}
const Exp = styled.div`
    font-size : 2.8rem;
    margin-top : 10px;
    letter-spacing : -0.28px;
    text-align : right;
`
const Ask = styled.div`
    font-size : 3.2rem;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    height : 40%;
    font-family : "Bold";
`

export default Scr6;