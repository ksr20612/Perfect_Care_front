import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../utils/toast";

const useToken = (cb) => {

    const [isTokenValid, setIsTokenValid] = useState(false);
    const navigate = useNavigate();

    const handleError = () => {
        navigate("/");
        toastError("세션이 만료되었습니다. 다시 로그인해주세요.");
        if(cb) cb();
    }

    return [ isTokenValid ];

}

export default useToken