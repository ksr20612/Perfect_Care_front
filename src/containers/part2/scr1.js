import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import CheckBlue from "../../assets/check_blue.png";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import DataBox from "../../components/dataBox";

const Scr1 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,1)}/>
            <Box>
                <DataBox title="나의 완벽주의는 이런 모습이었어요." customStyle={{"height" : "20%"}}>
                    <div></div>
                </DataBox>
                <DataBox title="나는 이런 감정을 느끼고 있었어요." customStyle={{"height" : "20%"}}>
                    <div></div>
                </DataBox>
                <DataBox title="내가 바꾸고 싶은 완벽주의의 모습은 이런 모습이었어요." customStyle={{"height" : "20%"}}>
                    <div></div>
                </DataBox>
                <Message>이러한 내 모습 이면에는 <br/> 어떤 기준이 자리잡고 있는지 확인해볼까요?</Message>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`

    position : relative;
    width : 100%;
    height : 80%;
    margin-top : 5%;
    display : flex;
    flex-direction : column;

`
const Message = styled.div`
    font-size : 3.2rem;
    width : 100%;
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
`

export default Scr1;