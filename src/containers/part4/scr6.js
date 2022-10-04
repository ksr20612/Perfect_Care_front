import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import SuperCell from "../../assets/Supercell-logo.svg";
import Champagne from "../../assets/champagne-svgrepo-com.svg";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr6 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,6)}/>
            <Content>
                <Name></Name>
                <Pic></Pic>
                <Subtitle>슈퍼셀, 실패에는 샴페인을</Subtitle>
                <div>
                    슈퍼셀은 맥주로 성공을 축하하고 샴페인으로 실패를 축하합니다. 프로젝트가 끝나면 축하를 하며 이는 실패가 받아들여질 수 있음을 강조하는 의미라고 해요.
                </div>
            </Content>
            {renderArrow()}
        </>
    )
}
const Name = styled.div`
    font-size : 3.6rem;
    font-family : "Medium";
    width : 100%;
    height : 20%;
    background-image : url(${SuperCell});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
`
const Pic = styled.div`
    width : 100%;
    flex : 1;
    background-image : url(${Champagne});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
`
const Content = styled.div`
    font-size : 2.0rem;
    font-family : "Regular";
    color : ${pallette.NEWBLACK};
    line-height : 150%;
    display : flex;
    flex-direction : column;
    margin : 0 auto;
    width : 50%;
    height : 80%;
    text-align : justify;
    text-indent : 1ch;

    & > div + div {
        margin-top : 5%;
    }
`
const Subtitle = styled.div`
    font-size : 1.4em;
    font-family : "Bold";
    text-align : center;
`

export default Scr6;