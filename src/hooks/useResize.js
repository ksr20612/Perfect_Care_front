import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useResize = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = debounce(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight); 
    }, 1000);

    useEffect(()=>{

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return [width, height];

}

export default useResize;