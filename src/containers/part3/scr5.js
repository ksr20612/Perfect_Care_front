import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import BlockBox from "../../components/blockBox";
import SamplePic from "../../assets/sample.jpg";
import AnswerBox from "../../components/answerBox";

const Scr5 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <BlockBox title="상황" content="심리학개론 수업 중 강의실에서 강단에 서서 40명쯤 되는 학생들 앞에서 발표하는 상황" fadein={true}/>
                <AnswerBox title="어떤 감정이 들었나요?" index="2/7">
                    <Deck>
                    {
                        cardList.map((card, i)=>{
                            return (
                                <div>
                                    <Card name={card.name} definition={card.definition} image={card.image}/>
                                </div>
                            )
                        })
                    }
                    </Deck>
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

const Deck = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fill, minmax(20%, auto));
    grid-template-rows : 1fr 1fr;
    grid-auto-flow : column;
    width : 100%;
    height : auto;
    overflow-x : auto;
    margin-top : 5vh;

    & > div {
        width : 100%;
        height : 100%;
        display : flex;
        justify-content : center;
        padding : 1vmin;
    }
`
const Answer = styled.div`
    margin : 0 auto;
    font-size : 2.6rem;
    width : 100%;
    flex-direction : column;
    align-items : unset !important;

    & > div {
        margin : 2vh 0;
    }
    & .subQuestion {
        width : 100%;

        & > span {
            float : right;
        }
    }
`

// 실제로는 fetch해서 가져올 것
const cardList = [
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "화남",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    }
]

export default Scr5;