import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const api = 'http://localhost:8000/people'







function Main(){
    const [mainState, setMainState] = useState([]) // remember to make it more descriptive 
    const [stateBoole, setStateBoole]= useState(false)

    // useEffect(()=>{
    //     fetch(api)
    //     .then((riz)=>{ // set better names
    //         if(riz.ok){
    //             return (
    //                 riz.json(), 
    //                 setStateBoole(true)
    //             )
    //         }
    //         else if(!riz.ok){
    //             throw new Error(`this error persists in Main.js with fetch`)
    //         }
    //     })
    //     .then(setMainState)
    //     .catch((error)=>(alert( `this error persists in Main.js after setMainState: ${error}` )))

    // },[])

 console.log(mainState)



    const bringBackToState = (value)=>{
        setMainState(value)
    }

    return(
        <>
        <NavBar/>
        <Outlet context={{mainState, api, bringBackToState}}/>
        <footer className='bottom-content' >{stateBoole ? `state is mounted` : `state is unmounted`}</footer>
        </>
    )
}
export default Main;
