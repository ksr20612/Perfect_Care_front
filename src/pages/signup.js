import { useState, useEffect, useRef } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../components/textBox";
import { Paper } from "../styles/components/paper";
import Button from "../components/button";
import { motion, useScroll } from "framer-motion";
import fadein from "../styles/framer-motion/fadein";
import { toastError, toastSuccess } from "../utils/toast";
import RadioBox from "../components/radioBox";
import Checkboxes from "../components/checkboxes";
import { POST } from "../services/userService";

const Signup = () => {

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({ container : cardRef });
    const [ id, setId ] = useState();
    const [ password, setPassword ] = useState();
    const [ nick, setNick ] = useState();
    const [ gender, setGender ] = useState();
    const [ age, setAge ] = useState();
    const [ fromWhere, setFromWhere ] = useState();
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleChange = (type, value) => {
        switch(type) {
            case "id" :
                return setId(value);
            case "password" :
                return setPassword(value);
            case "nick" :
                return setNick(value);
            default : return;
        }
    }
    const handleClick = () => {
        if(id && password && nick) {
            setLoading(true);
            console.log({id, password, nick, gender, age, fromWhere});
            POST("/user/join", {id, password, nick, gender, age, fromWhere}, {
                onSuccess : (result)=>{
                    if(!result) {
                        toastError("회원가입에 실패하였습니다.");
                    }else {
                        navigate("/login");
                        toastSuccess("회원가입에 성공하였습니다!");
                    }
                },
                onFail : ()=>{
                    toastError("회원가입에 실패하였습니다.");
                }
            })
        }else {
            toastError("필수 항목을 입력해주세요.");
        }
    }

    return (
        <Box>
            <Card as={motion.div} initial="hidden" animate="visible" variants={fadein} ref={cardRef}>
                <Progress>
                    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </Progress>
                <Title>회원가입</Title>
                <TextBox label="아이디 *" customStyle={{width:"50vh"}} value={id} handleChange={(value)=>{handleChange("id", value)}} hasBackground={false}/>
                <TextBox label="비밀번호 *" customStyle={{width:"50vh"}} value={password} handleChange={(value)=>{handleChange("password", value)}} hasBackground={false}/>
                <TextBox label="닉네임 *" customStyle={{width:"50vh"}} value={nick} handleChange={(value)=>{handleChange("nick", value)}} hasBackground={false}/>
                <Checkboxes title="성별" items={["남자", "여자"]} checked={gender} handleChange={(v)=>setGender(v===gender? "" : v)} />
                <Checkboxes title="나이" items={["1", "2", "3"]} checked={age} handleChange={(v)=>setAge(v===age? "" : v)} />
                <Checkboxes title="유입경로" items={["1", "2", "3", "4"]} checked={fromWhere} handleChange={(v)=>setFromWhere(v===fromWhere? "" : v)} />
                <br/>
                <Button customStyle={{ width : "50vh", }} handleClick={()=>{handleClick()}} loading={loading}/>
            </Card>
        </Box>
    )
}
const Box = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    width : 80vw;
    max-width : 1180px;
    height : calc(100vh - 6vh);
    margin-top : 6vh;
    padding-top : min(5vh, 62px);
    padding-left : min(15vw, 110px);
    padding-right : min(15vw, 110px);
    padding-bottom : min(5vh, 62px);
    background-color : #f9f8f7;
    position : relative;
    font-family : "Black";
    font-size : 3.2rem;
`
const Title = styled.div`
    margin-bottom : 3%;
`
const Card = styled(Paper)`
    width : 80%;
    height : 80%;
    padding : 10% 15%;
    text-align : center;
    overflow-y : auto;
    position : relative;

    &::-webkit-scrollbar {
        display : none;
    }
`
const Progress = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100px;
    height : 100px;

    & > #progress {
        position : fixed;
        transform: rotate(-90deg) translateY(-50%);
    }

    & circle {
        stroke-dashoffset: 0;
        stroke-width: 15%;
        fill: none;
    }

    & .bg {
        stroke: ${pallette.YELLOW};
        opacity: 0.2;
    }

    & #progress .indicator {
        stroke: ${pallette.YELLOW};
        opacity : 0.6;
    }
`

export default Signup;