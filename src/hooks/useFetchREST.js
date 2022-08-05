import { useState, useEffect } from "react";
import { GET } from "../services/dataService";

const useFetchREST = (path, callback = f=>f) => {

    useEffect(()=>{
        GET(path, (data)=>{
            console.log(data);
            callback(data);
        });
    }, [])

    return null;
}

export default useFetchREST;