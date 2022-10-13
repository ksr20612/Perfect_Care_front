import { useState, useEffect } from "react";
import { calculate, transform } from "utils/testCalculator";

const useCalculateTest = ({ types=[], scores=[] }) => {
    const [testResult, setTestResult] = useState(null);
    const [high, setHigh] = useState(null);

    useEffect(()=>{
        if(scores.length !== types.length) return; 
        const data = scores?.map((item, i) => {
            return {
                type : types[i],
                score : item,
            }
        });
        const { result, highlyScoredData } = calculate(data);
        setTestResult(transform(result));
        setHigh(highlyScoredData);
    }, []);

    return [testResult, high];
}

export default useCalculateTest;