import { useState, useEffect } from "react";
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

const RadioButtons = ({
    items = ["a", "b", "c"],
    handleChange = f => f,
}) => {

    return (
        <RadioGroup name="use-radio-group" defaultValue="1" onChange={(e)=>{handleChange(e.target.value)}}>
            {
                items.map((v,i)=>{
                    return <FormControlLabel value={i+1} label={v} control={<Radio />} />
                })
            }
        </RadioGroup>
    )
}

export default RadioButtons;