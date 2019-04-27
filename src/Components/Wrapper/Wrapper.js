import React from "react";
import "./Wrapper.css";


function Wrapper(props){
    return<div>
        <div className="wrapper">{props.children}</div>

    </div>
}

export default Wrapper;