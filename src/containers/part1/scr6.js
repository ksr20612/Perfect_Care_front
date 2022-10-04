import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import Spinner from "../../components/spinner";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr5 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,6)}/>
            <Spinner/>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 5%;
    width : 100%;
    height : 75%;
    border : 1px solid black;
`

export default Scr5;