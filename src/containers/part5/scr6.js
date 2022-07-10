import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr6 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,6)}/>
            지금의 나는 어떻게 변화했나요?
        </>
    )
}

export default Scr6;