import { ReactComponent as ArrowIcon } from "../../assets/btn_s_arrow_def.svg";
import styled from "styled-components";
import pallette from "../pallette.css";
import { lighten, darken } from "polished";

export const Arrow = styled(ArrowIcon)`
    width : 50px;
    height : 50px;
    position : absolute;
    top : 50%;
    right : 0;
    transform : translate(-50%, -50%) rotate(180deg);
    cursor : pointer;

    & > path {
        fill : ${pallette.YELLOW};
    }

    &.reversed {
        left : 0;
        transform : translate(50%, -50%);
    }
    & > path {
        transition : all 0.2s ease-in;
    }

    &:hover {
        & path {
            fill : ${lighten(0.2, pallette.GREEN)};
        }
    }
`