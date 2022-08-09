import { useState, useEffect } from "react";
import styled from "styled-components";
import BoxPattern from "../../assets/box_poup.svg";

const Download = () => {

    return (
        <Wrapper>
            <Box>

            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgba(0,0,0,0.3);
    z-index : 9998;
    position : fixed;
`
const Box = styled.div`
    width : 400px;
    height : 246px;
    background-image : url(${BoxPattern});
    background-position : center center;
    background-size : cover;
    position : relative;
`

export default Download;