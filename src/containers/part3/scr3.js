import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";

const Scr3 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="기준 점검하기"/>
            <Card />
        </>
    )
}

export default Scr3;