import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlagIcon from "../assets/ic_flg.svg";
import LockIcon from "../assets/ic_lock.svg";

const Part = ({
    title = "Part 01",
    color = "#547665",
    position = { top : "0px", left : "0px" },
    isDone = false,
    children
}) => {

    return (
        <>
            <Wrapper style={position}>
                {isDone? <Flag/> : <Lock/>}
                <Btn color={color}>{title}</Btn>
            </Wrapper>
            <div>
                {
                    children?
                        [].concat(children).map((child, i)=>{
                            return React.cloneElement(child, {
                                index : `${title.slice(-1)}-${i+1}`,
                                color : color,
                            })
                        })
                    : null
                }
            </div>
        </>
    )

}

const Wrapper = styled.div`
    width : 69px;
    display : flex;
    flex-direction : column;
    align-items : center;
    position : relative;
`
const Btn = styled.div`
    background-color : ${props=>props.color || "#black"};
    width : 69px;
    height : 33px;
    color : white;
    border-radius : 30px;
    box-shadow : 0px 6px 6px #00000029;
    display : flex;
    align-items : center;
    justify-content : center;
    font-family : "Bold";
    font-size : 1.5rem;
    letter-spacing : -0.23px;
    position : absolute;
    z-index : 4;
`
const Flag = styled.div`
    width : 38px;
    height : 64px;
    background-image : url(${FlagIcon});
    background-repeat : no-repeat;
    position : absolute;
    top : -64px;
    left : 30px;
    z-index : 4;
`
const Lock = styled.div`
    width : 30px;
    height : 42px;
    background-image : url(${LockIcon});
    background-repeat : no-repeat;
    position : absolute;
    top : -46px;
    z-index : 4;
`

export default Part;