import { useState, useEffect } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Checkboxes = ({
    items = [],
    checked,
    handleChange = f => f,
}) => {

    return (
        <FormGroup>
            {
                items.map((item)=>{
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox checked={item === checked} onChange={(e)=>handleChange(e.target.value)} value={item} color="default"/>
                            }
                            label={item}
                        />
                    )
                })
            }

        </FormGroup>
    )
}

export default Checkboxes