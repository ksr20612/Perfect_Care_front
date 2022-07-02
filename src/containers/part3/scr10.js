import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import BlockBox from "../../components/blockBox";
import AnswerBox from "../../components/answerBox";
import TextArea from "../../components/textArea";

const Scr10 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <div>
                    <BlockBox title="상황" content=""/>
                    <BlockBox title="기분" content=""/>
                    <BlockBox title="생각" content=""/>
                    <BlockBox title="이미지" content=""/>
                    <BlockBox title="나는 어떤 사람?" content=""/>
                    <BlockBox title="최악의 경우?" content="" fadein={true}/>
                </div>
                <div>
                    <AnswerBox title="나의 자동사고는?" index="7/7">
                        <TextArea height="100%"/>
                    </AnswerBox>
                </div>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
    display : flex;
    
    & > div:first-child {
        width : 50%;
    }
    & > div:last-child {
        width : 50%;
        padding-left : 3vmin;
    }
`

export default Scr10;