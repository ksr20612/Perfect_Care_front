import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion, AnimateSharedLayout } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import Color from "../../components/color";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";

const list = [
    {
        name : "불안",
        content : "미래에 일어날 수 있는 위험에 대비할 수 있습니다.",
        color : "red"
    },
    {
        name : "공포",
        content : "위험을 감지하고 즉각적으로 대응할 수 있습니다.",
        color : "blue"
    },
    {
        name : "분노",
        content : "사회의 불공평, 차별과 부당함에 저항하고, 위협적인 상황에서 스스로 방어할 수 있습니다.",
        color : "yellow"
    },
    {
        name : "수치심",
        content : "사회적으로 수용되지 않는 행동을 줄여 사회적 일원으로 살아갈 수 있습니다.",
        color : "green"
    },
    {
        name : "외로움",
        content : "타인과 소통할 수 있으며, 사회적인 단절로부터 대비할 수 있습니다.",
        color : "purple",
    },
    {
        name : "부러움",
        content : "발전하려는 동기를 제공할 수 있습니다.",
        color : "orange"
    }
]
const getContent = (name) => {
    for(const color of list) {
        if(color.name === name) {
            return color.content;
        }
    }
    return null;
}

const Scr7 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const [selected, setSelected] = useState(list[0].name);

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,7)}/>
            <Box>
                <Subtitle as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0}>우리의 다양한 감정들, <strong>순기능</strong>은 없을까요?</Subtitle>
                <Wrapper as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1}>
                    <AnimateSharedLayout>
                        {
                            list.map((item, i)=>(
                                <Color key={item.name} item={item} isSelected={selected === item.name} handleClick={(name)=>{setSelected(name);}}/>
                            ))
                        }
                    </AnimateSharedLayout>
                </Wrapper>
            </Box>
            <Card as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1}>
                {
                    getContent(selected)
                }
            </Card>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 5vh;
    font-size : 2.0rem;
    line-height : 150%;

    display : flex;
    flex-direction : column;
    align-items : center;
    text-align : center;
`
const Subtitle = styled.div`
    font-size : 3.2rem;
    justify-self : flex-start;

    & > strong {
        color : ${pallette.RED};
    }
`
const Wrapper = styled.div`
    margin-top : 5%;
    width : 100%;
    height : 50%;
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items : center;
`
const Card = styled(Paper)`
    margin-top : 5%;
    font-size : 3.2rem;
    height : 20%;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    word-break : keep-all;
`

export default Scr7;