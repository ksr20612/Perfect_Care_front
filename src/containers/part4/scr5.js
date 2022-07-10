import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr5 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,5)}/>
            구글의 혁신 연구실
        </>
    )
}

export default Scr5;