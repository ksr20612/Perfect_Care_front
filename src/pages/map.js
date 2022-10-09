import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import topImg from "../assets/bg_cir_02.png";
import bottomImg from "../assets/bg_cir.png";
import Doctor from "../assets/doctor_01.png";
import Logo from "../assets/logo.png";
import LogoImg from "../assets/ic_health Care.svg";
import ChartImg from "../assets/ic_medi.png";
import { useNavigate } from "react-router-dom";
import ProgressMap from "components/progressMap";
import Header from "components/header";

const Map = () => {

    const curPage = useSelector(state => state.page.pageIdx);
    const token = useSelector(state=>state.state.token);
    const navigate = useNavigate();
    const handleStart = () => {
        navigate("/0");
    }
    const [day, useDate] = useState(2);

    return (
        <Wrapper>
            <Header />
            <ProgressMap hasBulge={false} isFullWidth={true} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    background-color : white;
    z-index : 1;
`

export default Map;