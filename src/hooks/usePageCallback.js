import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrev, setCommon, setNext } from "../features/pageSlice";

const usePageCallback = ({
    onPrev = f=>f,
    onNext = f=>f,
    onCommon,
}) => {

    const prevCb = useSelector(state=>state.page.prev);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        try {
            dispatch(setPrev(()=>onPrev()));
            dispatch(setNext(()=>onNext()));
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