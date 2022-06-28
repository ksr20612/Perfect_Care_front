import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import SamplePic from "../../assets/sample.jpg";

const Scr3 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="기준 점검하기"/>
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
        </>
    )
}

const Deck = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fill, minmax(20%, auto));
    grid-template-rows : 1fr 1fr;
    grid-auto-flow : column;
    width : 100%;
    height : auto;
    overflow-x : auto;

    & > div {
        width : 100%;
        height : 100%;
        display : flex;
        justify-content : center;
        padding : 1vmin;
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

export default Scr3;