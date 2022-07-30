import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import CheckBlue from "../../assets/check_blue.png";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import DataBox from "../../components/dataBox";

const Scr1 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,1)}/>
            <Box>
                <DataBox title="나에게 이런 기준이 있었어요." customStyle={{"height" : "30%"}}>
                    <div></div>
                </DataBox>
                <DataBox title="이런 기준을 이렇게 변경해 보았어요." customStyle={{"height" : "30%"}}>
                    <div></div>
                </DataBox>
                <Message>나의 가혹한 기준을 변경했다면, <br/> 이제 근본적인 원인을 바꾸러 가볼까요?</Message>
            </Box>
        </>
    )
}

const Box = styled.div`

    position : relative;
    width : 100%;
    height : 70%;
    margin-top : 5%;
    display : flex;
    flex-direction : column;

    /* & > div {
        font-size : 2.6rem;
        display : flex;
        align-items : center;
        display : relative;

        &:not(:last-of-type){
            margin-top : 4vh;
        }

        &:before {
            content : "";
            display : absolute;
            width : 12vmin;
            height : 12vmin;
            background-image : url(${CheckBlue});
            background-size : contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin-right : 1vw;
        }
    } */
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