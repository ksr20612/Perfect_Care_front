import { useState, useEffect } from "react";
import { debounce } from "lodash";

const usePosition = (target) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handlePosition = debounce(()=>{
        setX(target.current.offsetLeft);
        setY(target.current.offsetTop);
        setWidth(target.current.offsetWidth);
        setHeight(target.current.offsetWidth);
    }, 1000);

    useEffect(()=>{
        handlePosition();
    },[target]);

    return [x, y, width, height];

}

export default usePosition;