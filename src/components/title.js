import { useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";

const Title = ({
    title = "PART02. 가혹한 기준의 덫",
    subTitle = "완벽주의 내 친구에게"
}) => {

    const titleItems = title.split(".");

    return (
        <Box>
            <span>
                <span className="title__bold">{titleItems[0]+"."}</span>
                <span className="title__regular">{titleItems[1]}</span>
            </span>
            <span className="title__sub">{subTitle}</span>
        </Box>
    )
}

const Box = styled.div`
    width : 100%;
    border-radius : 1.5vmin;
    font-size : 4.0rem; 
    display : flex;
    justify-content : space-between;
    align-items : center;
    
    & .title__bold {
        color : ${pallette.GREEN};
        font-family : "Bold";
    }
    & .title__regular {
        font-size : 3.2rem;
        font-family : "Medium";
    }
    & .title__sub {
        color : ${pallette.GREEN};
        font-size : 2.2rem;
        letter-spacing : -0.44px;
        font-family : "Light";
    }
`

export default Title;