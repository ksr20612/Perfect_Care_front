import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import Slider from '@mui/material/Slider';

const DiscreteSlider = ({
    value,
    handleChange = f=>f,
}) => {

    return (
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
            className="slider"
            onChange={(e)=>{handleChange(e.target.value)}}
        />
    )
}

export default DiscreteSlider;