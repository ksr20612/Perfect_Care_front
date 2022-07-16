import { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import pallette from "../styles/pallette.css";

const TextBox = ({
    label = "입력",
    value = "",
    width = "auto",
    handleChange = f => f,
    customStyle = {},
    hasBackground = true,
}) => {

    return (
        <Box className="textBox" style={{ width : width, ...customStyle }}>
            <TextField fullWidth id={hasBackground? "filled-basic" : "standard-basic"} label={label} variant={hasBackground? "filled" : "standard"} value={value} onChange={(e)=>handleChange(e.currentTarget.value)} InputProps={{ style: { fontSize: "2.4rem" } }} InputLabelProps={{ style: { fontSize: "1.6rem" } }}/>
        </Box>
    )
}

const Box = styled.div`
    & + & {
        margin-top : 3%;
    }
`

export default TextBox;