import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const Scr4 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,4)}/>
        </>
    )
}

export default Scr4;