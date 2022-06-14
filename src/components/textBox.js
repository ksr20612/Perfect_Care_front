import { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import pallette from "../styles/pallette.css";

const TextBox = ({
    label = "입력",
    value = "",
    width = "auto",
    handleChange = f => f,
}) => {

    return (
        <div className="textBox" style={{ width : width }}>
            <TextField fullWidth id="filled-basic" label={label} variant="filled" value={value} onChange={(e)=>handleChange(e.currentTarget.value)}/>
        </div>
    )
}

export default TextBox;