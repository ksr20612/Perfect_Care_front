import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";

const Scr5 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,5)}/>
        </>
    )
}

export default Scr5;