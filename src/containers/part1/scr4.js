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
import { useSelector, useDispatch } from "react-redux";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import { setHistory } from "services/setHistory";
import { setTestName } from "features/parts/part1Slice";

const list = [
    {
        name : `사회불안`,
        value : 1,
        icon : anxiety,
        desc : [
            "낯선 사람을 만나거나 대화, 발표하는 사회적 상황에서 타인에게 부정적으로 평가받거나 불안해하는 모습을 보일까봐 두려워 사회적인 상황을 회피해요"
        ]
    },
    {
        name : `우울`,
        value : 2,
        icon : depression,
        desc : [
            "하루 중 대부분 기분이 가라앚아 있으며, 활동에서 재미를 느끼지 못하고 쉽게 피로를 느끼는 등 에너지가 저하되었어요"
        ]
    },
    {
        name : `공황\n(신체증상)`,
        value : 3,
        icon : panic,
        desc : [
            "갑작스럽게 급등하는 두려움, 불쾌감과 함께 신체증상(가슴 두근거림, 숨가쁨, 메스꺼움, 떨림, 땀흘림, 어지러움, 손발 저림 등)이 발생해요"
        ]
    },
    {
        name : `번아웃`,
        value : 4,
        icon : burnout,
        desc : [
            "관리되지 않은 업무/학업 스트레스로 인해 에너지가 고갈되고 소진된 느낌이 들어요",
            "업무/공부에 대해 부정적이고 냉소적이게 되었어요",
            "업무/학습 효율이 감소되었어요"
        ]
    },
    {
        name : `불면`,
        value : 5,
        icon : sleep,
        desc : [
            "자려고 누워도 잠드는데 시간이 오래 걸려요",
            "새벽에 자주 깨고 다시 잠들기 어려워요",
            "수면의 양과 질, 만족감이 현저히 떨어졌어요"
        ]
    },
    {
        name : `강박`,
        value : 6,
        icon : ocd,
        desc : [
            "원치 않지만 반복적이고 지속적으로 어떤 생각이나 충동, 이미지가 떠올라요",
            "그런 생각들 때문에 불쾌하고 불안해요",
            "이러한 것들을 줄이기 위해 특정 행동을 반복하게 돼요"
        ]
    },
]

const Scr3 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    const clicked = useSelector(state=>state.part1.test.name);
    // const [clicked, setClicked] = useState(list[0].value);
    const handleClick = (value) => {
        // setClicked(value);
        dispatch(setTestName(value));
    }

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,4)}/>
            <Ask>지금 내가 가장 <strong>강하게 느끼는 증상</strong>은 어떤 것인가요?</Ask>
            <Wrapper>
                {
                    list.map((item, i)=>(
                        <Box className={clicked===item.name? "clicked" : null} onClick={()=>handleClick(item.name)}>
                            <Front>
                                <Icon icon={item?.icon}></Icon>
                                {item?.name}
                            </Front>
                            <Back>
                                {item?.desc.map((item, i)=>{
                                    return (    
                                        <List>{item}</List>
                                    )
                                })}
                            </Back>
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
    grid-template-columns : repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap : 5%;
`
const Box = styled(Paper)`
    padding : 5%;
    font-size : 2.4rem;
    font-weight : bolder;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    white-space : pre-wrap;
    text-align : center;
    transition : all 0.2s ease-in-out;
    cursor : pointer;
    position : relative;
    transition : transform 0.3s ease-in-out;
    transform-style : preserve-3d;
    border-radius : 10px;
    &.clicked {
        transform : rotateY(180deg);
        & > div {
            background-color : ${lighten(0.6, pallette.GREEN)};
        }
    }
    &:hover {
        background-color : ${lighten(0.6, pallette.GREEN)};
        & > div {
            background-color : ${lighten(0.6, pallette.GREEN)};
        }
    }
`
const Icon = styled.div`
    background : url(${props=>props.icon});
    background-size : auto;
    background-position : center;
    background-repeat : no-repeat;
    width : 60%;
    height : 60%;
    margin-bottom : 5%;
    opacity : 0.7;
`
const Front = styled.div`
    background-color : ${pallette.WHITE};
    width : 100%;
    height : 100%;
    position : absolute;
    backface-visibility: hidden;
	transform-style: preserve-3d;
    padding : 10%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around; 
    font-size : 2.5rem;
    border-radius : 10px;
`
const Back = styled.div`
    background-color : ${pallette.WHITE};
    width : 100%;
    height : 100%;
    position : absolute;
    backface-visibility: hidden;
	transform-style: preserve-3d;
    padding : 5%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    font-size : 1.6rem;
    transform : rotateY(180deg);
    border-radius : 10px;
`
const List = styled.div`
    font-size : 1.8rem;
    font-weight : unset;
    word-break : keep-all;
    & + & {
        margin-top : 5%;
    }
`

export default Scr3;