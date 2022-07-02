import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import SamplePic from "../../assets/sample.jpg";

const Scr3 = () => {

    const [on, setOn] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setOn(true);
        }, 500);
    }, []);

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라!"/>
            <Box>
                <div>
                    <div>내가 당황스러워했던 사건 뒤에는 나의 자동사고가 숨어있습니다.</div>
                    <div>형사가 되어 자동사고라는 용의자를 잡아봅시다.</div>
                </div>
                <div>
                    <div>이런 걸 작성할 거예요!</div>
                    <Block className={on? "on" : null}>1. 상황</Block>
                    <Block className={on? "on" : null}>2. 기분</Block>
                    <Block className={on? "on" : null}>3. 생각</Block>
                    <Block className={on? "on" : null}>4. 이미지</Block>
                    <Block className={on? "on" : null}>5. 나는 어떤 사람?</Block>
                    <Block className={on? "on" : null}>6. 최악의 경우</Block>
                </div>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
    display : flex;

    & > div {
        font-size : 2.6rem;
        display : flex;
        flex-direction : column;
        align-items : center;
        word-break : keep-all;
        text-align : center;

        &:first-of-type {
            width : 50%;
        }
        &:last-of-type {
            width : 50%;
        }
    }

`
const Block = styled.div`
    transform : translateY(5vh);
    opacity : 0;
    scroll-snap-align: center;
    transition : all 0.5s ease-in-out;
    background-color : ${lighten(0.5, pallette.BLUE)};
    width : 80%;
    height : auto;
    margin : 1vmin;
    padding : 1vmin;
    border-radius : 1vmin;
    font-size : 1.6rem;
    font-family : "Noto_Black";
    color : #333;
    box-shadow : 0px 3px 6px #00000029;

    &.on{
        transform : unset;
        opacity : 1;
    }

    &:nth-child(1) {
        transition-delay : .5s;
    }
    &:nth-child(2) {
        transition-delay : 1s;
    }
    &:nth-child(3) {
        transition-delay : 1.5s;
    }
    &:nth-child(4) {
        transition-delay : 2s;
    }
    &:nth-child(5) {
        transition-delay : 2.5s;
    }
    &:nth-child(6) {
        transition-delay : 3s;
    }
    &:nth-child(7) {
        transition-delay : 3.5s;
    }
`

export default Scr3;