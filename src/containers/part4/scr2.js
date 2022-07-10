import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr2 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,2)}/>
        </>
    )
}

const Box = styled.div`

`

export default Scr2;