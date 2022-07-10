import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr1 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,1)}/>
        </>
    )
}

export default Scr1;