import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as StopImg } from "../assets/btn_prt_checked.svg";
import { lighten } from "polished"; 

const Stop = ({
    index,
    position = { top : "0px", left : "0px" },
    color,
    isChecked = false,
}) => {

    return (
        <StopSign color={color} className={isChecked? "checked" : null} style={position}>
            {isChecked || <Index>{index}</Index>}
            <StopImg/>
        </StopSign>
    )
}

const StopSign = styled.div`
    width : 42px;
    height : 47px;
    position : absolute;
    color : ${props=>props.color};
    font-size : 9px;
    font-family : "Bold";
    letter-spacing : -0.14px;
    line-height : 11px;
    z-index : 4;
    transform : scale(1.05);

    & #point {
        fill : ${props=>props.color};
    }
    & #shadow {
        fill : ${props=>lighten(0.15,props.color)};
    }
    & #check {
        fill : ${props=>lighten(0.2,props.color)};
    }

    &:not(.checked) #check {
        fill : white;
    }

`
const Index = styled.div`
    position : absolute;
    width : 100%;
    display : flex;
    justify-content : center;
    top : 9px;
`

export default Stop;