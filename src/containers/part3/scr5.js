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
import { setScr4, setScr5, removeScr5 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { readInfo, writeInfo } from "../../utils/part3Converter";
import CardResult from "../../components/cardResult";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr5 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const selected = readInfo(scr5);
    const dispatch = useDispatch();
    const handleSelected = (name, score) => {
        dispatch(setScr5({[name] : score}));
    }
    const remove = (item)=>{
        dispatch(removeScr5(item.split(" ")[0]));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr5", { userIdx, emotion : scr5 }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        }
    });
    useFetchREST(`/part3/illustration/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setScr4(result.data.illustration.scr4));
                dispatch(setScr5(result.data.illustration.scr5));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,5)}/>
            <Box>
                <BlockBox title="상황" content={scr4} fadein={true}/>
                <AnswerBox title="어떤 감정이 들었나요?" index="2/7">
                    <Short>
                        {
                            selected.map(item => {
                                return (
                                    <CardResult content={item} handleClick={(content)=>remove(content)} />
                                )
                            })
                        }
                    </Short>
                    <Deck>
                    {
                        CardList.map((card)=>{
                            return (
                                <div>
                                    <Card name={card.name} definition={card.definition} image={card.image} isSelected={scr5.hasOwnProperty(card.name)} selectedScore={scr5[card.name]} handleSelected={(name, score)=>{handleSelected(name, score)}}/>
                                </div>
                            )
                        })
                    }
                    </Deck>
                </AnswerBox>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 5%;
    position : relative;
`

const Deck = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fill, minmax(20%, auto));
    grid-auto-rows : 300px;
    width : 100%;
    height : 50vh;
    overflow-y : auto;

    & > div {
        width : 100%;
        height : 100%;
        display : flex;
        justify-content : center;
        padding : 1vmin;
    }
`
const Short = styled.div`
    width : 100%; 
    height : 5vh;
    padding : 1vh;
    margin-bottom : 3vh;
    background-color : ${pallette.GREY};
    display : flex;
    align-items: center;
`
const Emotion = styled.span`
    width : 100px;
    font-size : 1.6rem;
    border-radius : 10px; 
    background-color : transparent;
    border : 1px solid ${pallette.BLACK};
    display : flex;
    justify-content : center;
    align-items : center;
    position : relative;

    & + & {
        margin-left : 10px;
    }
`
const Delete = styled.div`
    position : absolute;
`


export default Scr5;