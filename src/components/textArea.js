import styled from "styled-components";

const TextArea = ({
    label = "입력해주세요.",
    color = "black",
    handleChange = f => f
}) => {

    return (
        <>
            <TextBox autoFocus placeholder={label} color={color} onChange={(e)=>handleChange(e.currentTarget.value)}/>
        </>
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
    border : 2px solid ${props => props.color};
    outline-color : ${props => props.color};
    border-radius : 0.5vmin;
    transition : all 0.2s ease-out;

    &:focus {
        background-color : #e8e8e8;
    }

`

export default TextArea;