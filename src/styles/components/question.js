import styled from "styled-components";

const Question = styled.div`
    position : relative;
    margin-left : 3ch;

    &:before {
        content : "${props=>props.bullet}";
        position : absolute;
        left : -3ch;
    }
`

export default Question;