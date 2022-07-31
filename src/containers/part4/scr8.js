import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import TextArea from "../../components/textArea";
import { usePage } from "../../hooks/usePage";

const Scr8 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,8)}/>
            <Box>
                <Card></Card>
                <Question>Q. 그때 들었던 생각은?</Question>
                <TextArea customStyle={{padding : "20px"}}/>
                <Question>Q. 그 당시 나의 대처</Question>
                <TextArea customStyle={{padding : "20px"}}/>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 8vh;
`
const Card = styled(Paper)`
    background-color : #F4F2F0;
    height : 20vh;
`
const Question = styled.div`
    color : ${pallette.NEWBLACK};
    font-size : 2.8rem;
    font-family : "Medium";
    margin-bottom : 1vh;
    margin-top : 5vh;
`

export default Scr8;