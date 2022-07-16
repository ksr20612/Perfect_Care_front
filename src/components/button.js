import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import LoadingButton from '@mui/lab/LoadingButton';

const Button = ({
    handleClick = f => f,
    loading = false,
    customStyle = {},
}) => {

    return (
        <Box style={customStyle}>
            <LoadingButton
            fullWidth
            onClick={()=>handleClick()}
            loading={loading}
            variant="contained"
            sx={{fontSize : "2.4rem", backgroundColor : pallette.BLUE}}
            >
            시작하기
            </LoadingButton>
        </Box>
    )
}
const Box = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-top : 3%;
`

export default Button;