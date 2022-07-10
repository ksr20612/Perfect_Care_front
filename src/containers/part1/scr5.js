import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr5 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,5)}/>
        </>
    )
}

export default Scr5;