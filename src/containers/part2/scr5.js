import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";
import Comments from "../../components/commentBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr5 = () => {

    const [input, setInput] = useState();
    const handleChange = (v) => {
        setInput(v);
    }
    const handleClick = (e) => {
        console.log(input);
        setInput("");
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,5)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>
                    다음 영상에 나오는 주인공이 내 친구라고 생각했을 때,
                </div>
                <div>
                    어떤 말을 해주고 싶은지 댓글로 적어주세요.
                </div>
                <Container>
                    <MovieClip width="100%" height="100%"/>
                    <Comments value={input} handleChange={(v)=>{handleChange(v)}} handleClick={(e)=>{handleClick(e)}}>

                    </Comments>
                </Container>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;

    & > div {
        font-size : 2.6rem;
    }
`
const Container = styled.div`
    display : flex;
    width : 100%;
    margin-top : 2vh;
    
    & > div:first-child {
        width : 60%;
        height : 60vh;
    }
`

export default Scr5;