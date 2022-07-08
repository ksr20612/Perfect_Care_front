import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const Scr5 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="실패를 축하하다"/>
            구글의 혁신 연구실
        </>
    )
}

export default Scr5;