import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { darken } from "polished";

const TextArea = ({
    value = "", 
    label = "입력해주세요.",
    color = pallette.BLUISH,
    handleChange = f => f
}) => {

    return (
        <TextBox value={value} placeholder={label} color={color} onChange={(e)=>handleChange(e.currentTarget.value)}/>
    )
}

const TextBox = styled.textarea`
    display : block;
    font-family : "Noto_Regular", "Sans_Regular";
    font-size : 1.6rem;
    box-sizing : border-box;
    padding : 2vmin 2vmin;
    overflow : auto;
    resize : none;
    /* border : 2px solid ${props => props.color};
    outline-color : ${props => props.color}; */
    border : none;
    outline : none;
    background-color : ${props => props.color};
    border-radius : 1.5vmin;
    transition : all 0.2s ease-out;

    &:focus {
        background-color : ${props => darken(0.1, props.color)};
        border : none;
        outline : none;
    }

`

export default TextArea;