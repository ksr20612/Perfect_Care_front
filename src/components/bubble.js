import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import pallette from "../styles/pallette.css";
import Modal from "./modal";

const Bubble = ({
    speech = `이번 시험도 망치다니, <br/> 내 대학 입시는 망했어.`,
    title = `재앙화 사고`,
}) => {

    // 0 : default, 1 : flipped, 2 : popup
    const [status, setStatus] = useState(0);

    return (
        <Box className={status===1? "clicked" : null} onClick={(e)=>{setStatus(1)}}>
            <Title>{title}</Title>
            <Speech>{speech}</Speech>
            <Modal>

            </Modal>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`
const Title = styled.div`
    font-size : 2.4rem;
`
const Speech = styled.div`

`


export default Bubble;