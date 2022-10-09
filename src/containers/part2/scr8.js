import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Image from "../../assets/img2_8.jpg";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";
import pointerIcon from "assets/pointer.svg";
import Modal from "components/modal";
import TextArea from "components/textArea";

const Scr6 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    const [isModalOn, setIsModalOn] = useState(false);
    const [objective, setObjective] = useState("");

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,8)}/>
            <Box>
                <Img src={Image} alt="이미지"/>
                <Content>
                    <div>어떤 일을 맡으면 부담감부터 들고 <br/> 숨이 막히지 않으셨나요?</div>
                    <div>왜 이렇게 나 혼자 바쁘고 힘들까 생각하셨나요?</div> <br/>
                    <div>나도 모르게 세웠던 가혹한 기준이 </div>
                    <div>나의 발목을 잡고 있지는 않았는지 되돌아보아요.</div> <br/>
                    <div>삐뚤삐뚤해도 그대로 괜찮은,</div>
                    <div>[완벽]보다 작은 것부터 <span onClick={()=>setIsModalOn(true)}>[시작하기]</span>를 목표로 해볼까요?</div>
                </Content>
            </Box>
            <Modal isOn={isModalOn} size={{width : "30%"}} close={{on : true, handleClose : ()=>setIsModalOn(false)}}>
                <Instr>
                    우리 작은 것부터 시작해봐요. <br/>
                    아래 박스에 내 목표를 적어볼까요?
                </Instr>
                <TextArea placeholder={"예 : 내 일을 다른 사람에게 맡겨보기, 글씨가 마음에 안들어도 다음 장으로 넘겨서 적어보기"} value={objective} handleChange={(v)=>setObjective(v)}/>
            </Modal>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    display : flex;
    margin-top : 3%;
    height : calc(80%);
`
const Img = styled.img`
    width : 50%;
    height : 100%;
`
const Content = styled.div`
    width : 60%;
    padding : 2vmax;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    font-size : 2.4rem;
    & > div { 
        width : 100%;
        text-align : center;
        word-break : keep-all;
        & + div {
            margin-top : 5px;
        }
    }
    & span {
        background : ${pallette.YELLOW};
        color : ${pallette.WHITE};
        cursor : pointer;
        transform : all 0.2s ease-in;
        &:before {
            content : "";
            display : inline-block;
            background : url(${pointerIcon});
            background-position : center 1px;
            background-repeat : no-repeat;
            width : 0.8em;
            height : 0.8em;
        }
        &:hover {
            background : ${darken(0.1,pallette.YELLOW)};
        }
    }
`
const Instr = styled.div`
    font-size : 2.4rem;
    font-weight : bolder;
    margin-bottom : 5%;
`

export default Scr6;