import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import motion from "framer-motion";
import pallette from "../../styles/pallette.css";s

const Card = ({
    name = "",
    definition = "",
    icon,
    selected = { isSelected : false, score : 0 },
    handleSelected = f=>f,

}) => {

    // 0 : none, 1 : flipped
    const [flipped, setFlipped] = useState(0);
    
    return (
        <Box isSelected={selected?.isSelected} isFlipped={isFlipped}>
            <Front>
                <Title>{name}</Title>

            </Front>
            <Back>
                <Title>{name}</Title>

            </Back>
        </Box> 
    )
}

const Box = styled(motion.div)`
    height : 180px;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 5%;
    background-color : ${pallette.WHITE};
    color : ${pallette.BLACK};
    font-size : 2.0rem;
    perspective : 1000px;
    position : relative;
    transition : transform .3s ease-in-out;
    transform-style : preserve-3d;
    box-shadow : 3px 3px 10px #00000029;
    border-radius : 10px;

    ${props=>props.isSelected && css`
        border : 4px solid ${lighten(0.3, pallette.GREEN)};
    `}
    ${props=>props.isFlipped && css`
        transform : rotateY(180deg);
    `}
`
const Title = styled.div`
    border-bottom : 
`

export default Card;