import { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import pallette from "../styles/pallette.css";
import { darken } from "polished";

const TextBoxPlain = ({
    value = "",
    width = "auto",
    color = pallette.BLUISH,
    placeholder = "입력",
    handleChange = f => f,
}) => {

    return (
        <Input type="text" width={width} value={value} color={color} placeholder={placeholder} onChange={(e)=>handleChange(e.currentTarget.value)}/>
    )

}

const Input = styled.input`

    width : ${props => props.width};
    background-color : ${props => props.color};
    padding : 2vmin;
    font-size : 1.6rem;
    font-family : "Noto_Regular";
    border : none;
    border-radius : 1.5vmin;
    transition : all 0.2s ease-out;

    &:focus {
        background-color : ${props => darken(0.1, props.color)};
        border : none;
        outline : none;
    }

`

export default TextBoxPlain;