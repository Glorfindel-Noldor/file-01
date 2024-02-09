import React from "react";
import { useOutletContext } from "react-router-dom";

function Home(){
    const api = useOutletContext();

    return(
        <>
        <h1>Home</h1>
        </>
    )
}
export default Home;
