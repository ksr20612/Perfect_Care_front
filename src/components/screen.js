import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { ReactComponent as ArrowIcon } from "../assets/arrow_icon.svg";

const Screen = ({children}) => {

    return (
        <Box>
            <Arrow />
            {children}
            <Arrow className="reversed"/>
        </Box>
    )
}

const Box = styled.div`
    border : 2px solid rgba(0,0,0,0.5);
    display : flex;
    flex-direction : column;
    width : 80vw;
    height : 80vh;
    background-color : #fff;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : calc((100vh - 80vh + 5vh) / 2);
`

const Arrow = styled(ArrowIcon)`
    width : 8vmin;
    height : 8vmin;
    position : absolute;
    top : 50%;
    right : 0;
    transform : translate(50%, -50%);
    margin-right : 5vw;

    &.reversed {
        left : 0;
        margin-left : 5vw;
        transform : translate(-50%, -50%) rotate(180deg);
    }
    & > path {
        transition : all 0.3s ease-in;
    }

    :hover {
        & > path {
            fill : ${pallette.VIOLET};
        }
    }
`

export default Screen;