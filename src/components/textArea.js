import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { darken } from "polished";

const TextArea = ({
    width = "100%",
    height = "auto",
    value = "", 
    placeholder = "입력해주세요.",
    color = pallette.WHITE,
    customStyle = {},
    handleChange = f => f
}) => {

    return (
        <TextBox value={value} placeholder={placeholder} width={width} height={height} color={color} onChange={(e)=>handleChange(e.currentTarget.value)} style={customStyle}/>
    )
}

const TextBox = styled.textarea`
    display : block;
    font-family : "Noto_Regular", "Sans_Regular";
    font-size : 1.3rem;
    box-sizing : border-box;
    padding : 2vmin 2vmin;
    overflow : auto;
    resize : none;
    /* border : 2px solid ${props => props.color};
    outline-color : ${props => props.color}; */
    border : 3px solid #C6B9B680;
    outline : none;
    width : ${props => props.width};
    height : ${props => props.height};
    background-color : ${props => props.color};
    border-radius : 4px;
    transition : all 0.2s ease-out;

    &:focus {
        border : 3px solid #C6B9B6;
        outline : none;
    }

`

export default TextArea;