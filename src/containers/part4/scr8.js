import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";

const Scr8 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="실수 피드백"/>
            면접관의 대답에 아는 체하며 대답했지만, 사실 질문의 의도와 다른 대답이어서 면접관의 반응이 싸늘했었던 적이 있었어.
        </>
    )
}

export default Scr8;