import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_STANDARD } from "../app/queries";

const useFetch = (gql = GET_STANDARD, sendData = { userIdx : "1" }) => {

    // apollo sample
    const { data, loading, error } = useQuery(gql, { variables : sendData });
    if(loading) console.log("fetching data from apollo server...");
    if(error) console.log("could not fetch data...");
    if(data) {
        console.log(data);
    }

    return [ data, loading, error ];
}

export default useFetch;