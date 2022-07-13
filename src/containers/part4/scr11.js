import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

import { Paper } from "../../styles/components/paper";
import Chat from "../chat";

const Scr11 = () => {

    return (
        <>
            <Box>
                {/* <Chat/> */}
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    margin-top : 4vh;
    height : 70vh;
    position : relative;
    display : flex;
    align-items : center;
    justify-content : center;
`


export default Scr11;