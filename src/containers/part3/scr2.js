import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import BoardImg from "../../assets/board.png";
import { usePage } from "../../hooks/usePage";

const Scr2 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,2)}/>
            <Board></Board>
            {renderArrow()}
        </>
    )
}

const Board = styled.div`
    background : url(${BoardImg});
    width : 100%;
    height : 100%;
    background-position : center center;
    background-repeat : no-repeat;
    background-size : contain;
`

export default Scr2;