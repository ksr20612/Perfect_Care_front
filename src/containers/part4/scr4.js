import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";
import { motion } from "framer-motion";

const Scr4 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="실수가 두려운 완벽주의자에게"/>
            <Box as={motion.div} animate={{ y : [50, 0], opacity : [0, 1]}} transition={{ type : "easeOut", duration : 1}}>
                <MovieClip width="100%" height="100%"/>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    display : flex;
    align-items : center;
    justify-content : center;

    & > div {
        margin-top : 5vh;
        font-size : 2.6rem;
        width : 80%;
        height : 60vh;
    }
`

export default Scr4;