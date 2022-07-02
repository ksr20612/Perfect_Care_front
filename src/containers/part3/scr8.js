import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import BlockBox from "../../components/blockBox";
import AnswerBox from "../../components/answerBox";
import TextArea from "../../components/textArea";

const Scr8 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <BlockBox title="상황" content=""/>
                <BlockBox title="기분" content=""/>
                <BlockBox title="생각" content=""/>
                <BlockBox title="이미지" content="" fadein={true}/>
                <AnswerBox title="내가 어떤 사람이라는 생각이 들었나요?" index="5/7">
                    <TextArea height="100%"/>
                </AnswerBox>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
`

export default Scr8;