import { useState, useEffect } from "react";
import styled from "styled-components";
import samplePic from "../assets/sample.jpg";

const Guru = ({
    pic = samplePic,
}) => {


    return (
        <Box pic={pic}></Box>
    )
}

const Box = styled.div`
    background-image : url(${props => props.pic});
    background-size : contain;
    background-position : center center;
    width : 7vw;
    height : 7vw;
    border-radius : 50%;
    cursor : pointer;
`

export default Guru;