import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const api = 'http://localhost:8000/data'

function Main(){
    const [mainState, setMainState] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((riz)=>{
            if(riz.ok){
                return riz.json()
            }
            else if(!riz.ok){
                throw new Error(`this error persists in Main.js with fetch`)
            }
        })
        .then(setMainState)
        .catch((error)=>(alert( `this error persists in Main.js after setMainState: ${error}` )))
    },[])








    return(
        <>
        <NavBar />
        <Outlet context={api}/>
        <h1>Main</h1>
        </>
    )
}
export default Main;
