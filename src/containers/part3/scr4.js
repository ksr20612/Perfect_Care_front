import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import DiscreteSlider from "../../components/discreteSlider";

const Scr4 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <DiscreteSlider />
        </>
    )
}

export default Scr4;