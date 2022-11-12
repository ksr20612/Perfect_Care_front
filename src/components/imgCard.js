import styled, { css } from "styled-components";
import img1 from "assets/imgCards/img1.jpg";
import pallette from "styles/pallette.css";

const ImgCard = ({
    img = img1,
    description = "어느 곳에서도 어울리지 못하는 나의 모습",
    selected = false,
    ...props
}) => {

    return (
        <Box selected={selected}>
            <Img img={img} description={description} {...props}/>
        </Box>
    )
}

const Box = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    border-radius : 20px;
    overflow : hidden;
    ${props=>props.selected && css`
        border : 4px solid ${pallette.VIOLET};
    `}
`
const Img = styled.div`
    background : ${props=>`url(${props.img})`};
    background-position : center;
    background-repeat : no-repeat;
    background-size: cover;
    width : 100%;
    height : 100%;
    position : absolute;
    cursor : pointer;
    &:hover {
        opacity : 0.8;
    }
    &:after {
        opacity : 0;
        content : "${props=>props.description}";
        color : #fff;
        font-family : "Bold";
        font-size : 2.8rem;
        text-align : center;
        word-break : keep-all;
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
    }
    &:hover:after {
        opacity : 1;
    }
`

export default ImgCard;