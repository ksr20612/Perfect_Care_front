import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const Scr9 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="실수 피드백"/>
            동일한 실수를 하게 된다면 어떻게 대처?
        </>
    )
}

export default Scr9;