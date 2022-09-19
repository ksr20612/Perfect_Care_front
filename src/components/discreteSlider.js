import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DiscreteSlider = ({
    value,
    handleChange = f=>f,
    color = "blue",
}) => {

    useEffect(()=>{console.log(value)})
    return (
        <ThemeProvider theme={theme} className="slider">
            <Slider
                aria-label="Temperature"
                defaultValue={5}
                value={value}
                getAriaValueText={v=>v}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
                onChange={(e)=>{handleChange(e)}}
                color={color}
            />
        </ThemeProvider>
    )
}

const theme = createTheme({
    palette : {
        blue : {
            main : "#5289c9",
        },
        red : {
            main : "#ff6a81",
        }
    }
})

export default DiscreteSlider;