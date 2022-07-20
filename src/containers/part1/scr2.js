import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const Scr2 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,2)}/>
        </>
    )
}

const Box = styled.div`

`

export default Scr2;