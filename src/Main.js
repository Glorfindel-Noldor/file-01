import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const api = 'http://localhost:8000/people'







function Main(){


    // const [peopleInfo, setPeopleInfo] = useState({
    //     first: '',
    //     last: '',
    //     email: '',
    //     occupation: ''
    // }) 
    
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [occupation, setOccupation]=useState('')








    useEffect(()=>{
        fetch(api)
        .then((res)=>{ // set better names
            if(res.ok){
                return (
                    res.json()
                )
            }
            else if(!res.ok){
                throw new Error(`this error persists in Main.js with fetch`)
            }
        })
        .then((data)=>{
           data.people.forEach((person)=>{
            setFirstName(person.first);
            setLastName(person.last);
            setEmail(person.email);
            setOccupation(person.occupation);           
           })
        })
        .catch((error)=>(alert( `this error persists in Main.js after trying to update fetch-then: ${error}` )))

    },[])

    return(
        <>
        <NavBar/>
        {/* <Outlet context={{peopleInfo, api, setPeopleInfo}}/> */}

        <Outlet context={{api,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            email,
            setEmail,
            occupation,
            setOccupation
        }}/>

        </>
    )
}
export default Main;
