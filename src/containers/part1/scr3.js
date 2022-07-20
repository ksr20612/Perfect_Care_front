import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";

const list = [
    {
        name : `무대공포증\n사회불안`,
        value : 1,
    },
    {
        name : `우울`,
        value : 2,
    },
    {
        name : `공황\n(신체증상)`,
        value : 3,
    },
    {
        name : `번아웃`,
        value : 4,
    },
    {
        name : `불면`,
        value : 5,
    },
    {
        name : `강박`,
        value : 6,
    },
]

const Scr3 = () => {

    const [clicked, setClicked] = useState(list[0].value);
    const handleClick = (value) => {
        setClicked(value);
    }

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,3)}/>
            <Ask as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0}>지금 내가 가장 <strong>강하게 느끼는 증상</strong>은 어떤 것인가요?</Ask>
            <Wrapper>
                {
                    list.map((item, i)=>(
                        <Box as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0.5*(i+1)} className={clicked===item.value? "clicked" : null} onClick={()=>handleClick(item.value)}>{item.name}</Box>
                    ))
                }
            </Wrapper>
        </>
    )
}
const Ask = styled.div`
    width : 100%;
    text-align : center;
    margin-top : 5%;
    font-size : 3.2rem;

    & > strong {
        color : ${pallette.RED};
    }
`
const Wrapper = styled.div`
    margin-top : 5%;
    width : 100%;
    height : 60%;
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap : 5%;
`
const Box = styled(Paper)`
    padding : 5%;
    font-size : 2.4rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    white-space : pre-wrap;
    text-align : center;
    transition : all 0.3s ease-in-out;

    &.clicked {
        border : 5px solid ${pallette.GREEN};
        background-color : ${lighten(0.6, pallette.GREEN)};
    }

    &:hover {
        background-color : ${lighten(0.6, pallette.GREEN)};
    }
`

export default Scr3;