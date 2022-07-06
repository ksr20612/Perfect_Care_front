import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Katalk from "../katalk";

const Scr3 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="완벽주의자 Y양의 실수"/>
            <Katalk />
        </>
    )
}

export default Scr3;