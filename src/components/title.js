import { useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";

const Title = ({
    title = "PART2 가혹한 기준의 덫",
    subTitle = "완벽주의 내 친구에게"
}) => {

    return (
        <Box>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </Box>
    )
}

const Box = styled.div`
    width : 100%;
    height : 10vh;
    background-color : ${pallette.GREY};
    border-radius : 1.5vmin;
    font-size : 2.0rem;
    padding : 0 2vw;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

export default Title;