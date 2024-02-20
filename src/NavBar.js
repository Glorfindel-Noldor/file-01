import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <nav>
            <NavLink to={'/'}> Form </NavLink>
            <NavLink to={'/one'}> One</NavLink>
            <NavLink to={'/two'}> Two</NavLink>
            <NavLink to={'/three'}> Three</NavLink>

        </nav>
    )
}
export default NavBar;
