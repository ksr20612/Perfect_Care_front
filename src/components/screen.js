import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { ReactComponent as ArrowIcon } from "../assets/arrow_icon.svg";
import { darken } from "polished";

const Screen = ({children}) => {

    return (
        <>
            <Box>
                <Arrow />
                {children}
                <Arrow className="reversed"/>
            </Box>
        </>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    width : 80vw;
    height : calc(100vh - 6vh);
    background-color : #fff;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 6vh;
`

const Arrow = styled(ArrowIcon)`
    width : 8vmin;
    height : 8vmin;
    position : absolute;
    top : 50%;
    right : 0;
    transform : translate(50%, -50%) scale(1.5);
    margin-right : 5vw;
    & > path {
        fill : ${pallette.YELLOW};
    }

    &.reversed {
        left : 0;
        margin-left : 5vw;
        transform : translate(-50%, -50%) rotate(180deg) scale(1.5);
    }
    & > path {
        transition : all 0.2s ease-in;
    }

    :hover {
        & > path {
            fill : ${darken(0.1, pallette.YELLOW)};
        }
    }
`

export default Screen;