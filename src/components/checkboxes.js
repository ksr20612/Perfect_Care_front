import { useState, useEffect } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Checkboxes = ({
    items = {
        "a" : false,
        "b" : false,
        "c" : false,
    },
    handleChange = f => f,
}) => {

    return (
        <FormGroup>
            {
                Object.keys(items).map((key)=>{
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox checked={items[key]} onChange={(e)=>handleChange(e.target.value)} value={key} color="default"/>
                            }
                            label={key}
                        />
                    )
                })
            }

        </FormGroup>
    )
}

export default Checkboxes