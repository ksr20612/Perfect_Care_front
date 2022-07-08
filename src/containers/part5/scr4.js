import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const Scr4 = () => {

    return (
        <>
            <Title title="Part5 완벽을 버릴 때 완벽에 가까워진다" subTitle="내가 통제하는 완벽주의"/>
            완벽주의 유형검사 한번 더
        </>
    )
}

export default Scr4;