import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import pallette from "../styles/pallette.css";
import Modal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOn, toggleModalOn } from "../features/modalSlice";

const Bubble = ({
    title = `재앙화 사고`,
    content = `이번 시험도 망치다니, \n 내 대학 입시는 망했어.`,
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

    return (
        <Box className={status===1? "clicked" : null} onClick={(e)=>{handleClick()}}>
            <Title>{title}</Title>
            <Speech>{content}</Speech>
            <Modal size={{width : "50vw", height : "50vh"}} isOn={status===2} close={{on: true, handleClose: (e)=>{close(e)}}}>
                {children}
            </Modal>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 1vmin;
    padding : 1.5vmin;
    word-break : keep-all;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    background-color : ${pallette.GREY};
    border-radius : 10%;

    &.clicked > div:first-child {
        opacity : 1;
    }

    &.clicked > div:nth-child(2) {
        font-size : 1.6rem;
        transform : translateY(0);
    }

`
const Title = styled.div`
    opacity : 0;
    transition : all .3s ease-in;
`
const Speech = styled.div`
    font-size : 2.4rem;
    font-family : "Noto_medium";
    transform : translateY(-2vh);
    transition : all .3s ease-in;
    white-space : pre-line;
`

export default Bubble;