import { useState, useEffect } from "react";
import styled from "styled-components";
import Today from "../utils/date";
import pallette from "../styles/pallette.css";
import { lighten } from "polished";

const Summary = ({
    title = "PART 3 : 자동사고 기록지, 인지 오류",
    children
}) => {

    return (
        <Box>
            <Title>
                <div>{title}</div>
                <div>{Today}</div>
            </Title>
            <Content>
                {children}
            </Content>
        </Box>
    )
}
const Box = styled.div`
    width : 100%;
    height : 70vh;
    border : 3px solid ${pallette.BLUE};
    font-size : 2.4rem;
`
const Title = styled.div`
    border-bottom : 3px solid ${pallette.BLUE};
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 1vmin;
    height : 50px;

    & > div:last-of-type {
        font-size : 1.6rem;
        align-self : flex-end;
    }
`
const Content = styled.div`
    position : relative;
    padding : 1vmin;
    width : 100%;
    height : calc(100% - 50px);

    background-size: 30px, 30px, 30px 30px, 30px 30px;
    background-image: linear-gradient(90deg, ${lighten(0.7, pallette.BLUE)} 1px, transparent 1px), linear-gradient(90deg, ${lighten(0.7, pallette.BLUE)} 1px, transparent 1px), linear-gradient(${lighten(0.7, pallette.BLUE)} 1px, transparent 1px), linear-gradient(${lighten(0.7, pallette.BLUE)} 1px, transparent 1px);
`

export default Summary;