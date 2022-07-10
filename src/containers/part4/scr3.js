import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Katalk from "../katalk";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr3 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,3)}/>
            <Katalk />
        </>
    )
}

export default Scr3;