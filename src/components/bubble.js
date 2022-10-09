import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { LayoutGroup, motion, AnimateSharedLayout } from "framer-motion";
import pallette from "../styles/pallette.css";
import Modal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOn, toggleModalOn } from "../features/modalSlice";
import fadein from "../styles/framer-motion/fadein";

const Bubble = ({
    title = `재앙화 사고`,
    content = `이번 시험도 망치다니, \n 내 대학 입시는 망했어.`,
    icon,
    children
}) => {

    // 0 : default, 1 : flipped, 2 : popup
    const [status, setStatus] = useState(0);
    const dispatch = useDispatch();
    const handleClick = () => {
        switch(status) {
            case 0 :
                return setStatus(1);
            case 1 :
                return setStatus(2);
            case 2 :
                return;
            default : return;
        }
    }
    const close = (e) => {
        setStatus(0);
    }

    useEffect(()=>{
        console.log(status);
    })

    return (
        <Box as={motion.div} layout onClick={(e)=>{handleClick()}}>
            {status===1? <Title as={motion.div} layout initial="hidden" animate="visible" variable={fadein} custom={1}>{title}</Title> : null}
            <Speech as={motion.div} layout >
                <Icon src={icon}></Icon>
                "{content}"
            </Speech>
            <Modal size={{width : "40%", height : "40%"}} isOn={status===2} close={{on: true, handleClose: (e)=>{close(e)}}} displayFlex={true} customStyle={{flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
                {children}
            </Modal>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    margin : 3%;
    padding : 5%;
    word-break : keep-all;
    text-align : center;
    background-color : ${pallette.WHITE};
    border-radius : 20px;
    box-shadow : #C4C8D066 0px 10px 20px;
    width : 90%;
    height : 90%;
    /* &.clicked > div:first-child {
        opacity : 1;
    }

    &.clicked > div:nth-child(2) {
        font-size : 1.6rem;
        transform : translateY(0);
    } */
`
const Title = styled.div`
    width : 100%;
    height : auto;
    text-align : left;
    border-bottom : 2px solid ${pallette.BLUISH};
    margin-bottom : 5%;
`
const Speech = styled.div`
    font-size : 2.8rem;
    font-family : "Hand";
    white-space : pre-line;
    width : 100%;
    flex : 1;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;
    color : #919191;
`
const Icon = styled.div`
    width : 40%;
    height : 40%;
    background : url(${props=>props.src});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
`

export default Bubble;