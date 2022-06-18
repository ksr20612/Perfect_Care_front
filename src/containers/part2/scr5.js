import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";
import Comments from "../../components/commentBox";

const Scr5 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="완벽주의 내 친구에게"/>
            <Box>
                <div>
                    다음 영상에 나오는 주인공이 내 친구라고 생각했을 때,
                </div>
                <div>
                    어떤 말을 해주고 싶은지 댓글로 적어주세요.
                </div>
                <Container>
                    <MovieClip width="100%" height="100%"/>
                    <Comments>

                    </Comments>
                </Container>
            </Box>
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