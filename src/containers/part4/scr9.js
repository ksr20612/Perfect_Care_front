import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr9 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,9)}/>
            동일한 실수를 하게 된다면 어떻게 대처?
        </>
    )
}

export default Scr9;