import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr8 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,8)}/>
            완벽은 완전히 없애는 것이 아니라 "케어"하는 것!
        </>
    )
}

export default Scr8;