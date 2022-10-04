import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import sleep from "../../assets/sleep.svg";
import ocd from "../../assets/ocd.svg";
import depression from "../../assets/depression.svg";
import burnout from "../../assets/burnout.svg";
import anxiety from "../../assets/anxiety.svg";
import panic from "../../assets/panic.svg";
import none from "../../assets/none.svg";
import { useSelector } from "react-redux";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import { setHistory } from "services/setHistory";

const list = [
    {
        name : `사회불안\n(무대공포증)`,
        value : 1,
        icon : anxiety
    },
    {
        name : `우울`,
        value : 2,
        icon : depression
    },
    {
        name : `공황\n(신체증상)`,
        value : 3,
        icon : panic
    },
    {
        name : `번아웃`,
        value : 4,
        icon : burnout,
    },
    {
        name : `불면`,
        value : 5,
        icon : sleep,
    },
    {
        name : `강박`,
        value : 6,
        icon : ocd,
    },
    {
        name : `?`,
        value : 7,
        icon : none,
    }
]

const Scr3 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    const [clicked, setClicked] = useState(list[0].value);
    const handleClick = (value) => {
        setClicked(value);
    }

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,4)}/>
            <Ask>지금 내가 가장 <strong>강하게 느끼는 증상</strong>은 어떤 것인가요?</Ask>
            <Wrapper>
                {
                    list.map((item, i)=>(
                        <Box className={clicked===item.value? "clicked" : null} onClick={()=>handleClick(item.value)}>
                            <Icon icon={item?.icon}></Icon>
                            {item.name}
                        </Box>
                    ))
                }
            </Wrapper>
            {renderArrow()}
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
    grid-template-columns : repeat(4, 1fr);
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
    transition : all 0.2s ease-in-out;
    &.clicked {
        background-color : ${lighten(0.6, pallette.GREEN)};
    }
    &:hover {
        background-color : ${lighten(0.6, pallette.GREEN)};
    }
`
const Icon = styled.div`
    background : url(${props=>props.icon});
    background-size : auto;
    background-position : center;
    background-repeat : no-repeat;
    width : 60%;
    height : 60%;
`

export default Scr3;