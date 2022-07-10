import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import BlockBox from "../../components/blockBox";
import CardList from "../../assets/jsons/cardList";
import AnswerBox from "../../components/answerBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { useSelector, useDispatch } from "react-redux";
import { setScr5 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr5 = () => {

    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr5(v)));
    }

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,5)}/>
            <Box>
                <BlockBox title="상황" content={scr4} fadein={true}/>
                <AnswerBox title="어떤 감정이 들었나요?" index="2/7">
                    <Deck>
                    {
                        CardList.map((card, i)=>{
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

export default Scr5;