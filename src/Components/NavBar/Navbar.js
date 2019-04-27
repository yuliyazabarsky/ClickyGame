import React from "react";
import "./Navbar.css";

function Navbar(props){
    return <nav className ="navbar">
    <ul>
        <li> Clicky Game </li>
        <li> {props.message}</li>
        <li> Score : {props.score} | Top Score: {props.bestScore}</li>

    </ul>
    </nav>


}

export default Navbar;