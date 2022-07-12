import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { darken, lighten } from "polished";

const DataBox = ({
    title="내 자동사고",
    size = { width : "100%", height : "100%" },
    children
}) => {

    return (
        <Box>
            <Title>{title}</Title>
            {children}
        </Box>
    )
}
const Box = styled.div`
    width : 100%;
    max-width : 960px;
    height : 20vh;
    max-height : 150px;
    background-color : ${pallette.WHITE};
    padding : min(20px, 2vmin);
    box-shadow : 3px 3px 10px #B1B0AF26;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;

    & + & {
        margin-top : 3vh;
    }
`
const Title = styled.div`
    font-size : 2.8rem;
    margin-bottom : 10px;
    letter-spacing : -0.28px;
`
export default DataBox;