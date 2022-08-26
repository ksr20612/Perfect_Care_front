import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/btn_s_arrow_def.svg";
import { darken, lighten } from "polished";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPageIdx } from "../features/stateSlice";
import { setIsClicked } from "../features/pageSlice";
import { toastInfo } from "../utils/toast";
import { getPageLen } from "../app/pageInfo";
import { toast } from "react-toastify";
import { usePage } from "../hooks/usePage";
import ProgressBar from "./progressBar";
import useToken from "../hooks/useToken";

const Screen = ({
    children
}) => {

    // const [isTokenValid] = useToken();

    return (
        <Box>
            {children}
            <ProgressBar />
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    width : 80vw;
    max-width : 1180px;
    height : calc(100vh - 6vh);
    max-height : 900px;
    background-color : #fff;
    display : flex;
    margin-top : 6vh;
    /* transform : translateY(calc((94vh - 100%) / 2)); */
    padding-top : min(5vh, 62px);
    padding-left : min(15vw, 110px);
    padding-right : min(15vw, 110px);
    background-color : #f9f8f7;
    position : relative;
`

export default Screen;