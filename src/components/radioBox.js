import { useState, useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioBox = ({
    title = "성별",
    items = ["a", "b", "c"],
    value,
    handleChange = f => f,
}) => {

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">{title}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e)=>handleChange(e.currentTarget.value)}
            >
                {
                    items.map((v, i)=>{
                        return <FormControlLabel value={v} control={<Radio />} label={v} key={title+"_"+i}/>
                    })
                }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioBox;