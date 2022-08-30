import { useState, useEffect } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Checkboxes = ({
    title,
    items = [],
    checked,
    handleChange = f => f,
}) => {

    return (
        <>
            {title? <FormLabel component="legend" sx={{ fontSize : "1.6rem", textAlign : "left", marginTop : "2vh"}}>{title}</FormLabel> : null}
            <FormGroup>
                {
                    items.map((item)=>{
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox checked={(item?.from || item) === checked} onChange={()=>handleChange(item)} value={item?.from || item} color="default" />
                                }
                                label={<span style={{ fontSize: '1.4rem' }}>{item?.from || item}</span>}
                            />
                        )
                    })
                }

            </FormGroup>
        </>
    )
}

export default Checkboxes