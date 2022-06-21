import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import Slider from '@mui/material/Slider';

const DiscreteSlider = ({

}) => {

    return (
        <Slider
            aria-label="Temperature"
            defaultValue={5}
            getAriaValueText={v=>v}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
        />
    )
}

export default DiscreteSlider;