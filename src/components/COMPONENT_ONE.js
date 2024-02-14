import React from "react";
import { useOutletContext } from "react-router-dom";


function COMPONENT_ONE() {
    const mainState = useOutletContext();


    return (
        <>
            <small>
                <p>
                    COMPONENT_ONE <br /> <hr />
                </p>
            </small>
        </>
    );
}
export default COMPONENT_ONE;
