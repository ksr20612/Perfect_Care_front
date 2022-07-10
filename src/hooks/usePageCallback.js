import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrev, setCommon, setNext, setBeforePrev, setBeforeNext } from "../features/pageSlice";

const usePageCallback = ({
    onBeforePrev = f=>f,
    onBeforeNext = f=>f,
    onAfterPrev = f=>f,
    onAfterNext = f=>f,
    onCommon,
}) => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        try {
            dispatch(setBeforePrev(()=>onBeforePrev()));
            dispatch(setBeforeNext(()=>onBeforeNext()));
            dispatch(setPrev(()=>onAfterPrev()));
            dispatch(setNext(()=>onAfterNext()));
            if(onCommon) dispatch(setCommon(()=>onCommon));
            setSuccess(true);
        } catch(err) {
            setSuccess(false);
            setError(err);
        }
    }, []);

    return [success, error];

}

export default usePageCallback;