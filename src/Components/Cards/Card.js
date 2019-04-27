import React from "react";
import "./Card.css";

function Card(props){
    return(
        <div className="card">
            <div onClick = {() => props.setClicked(props.id)} className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}
export default Card;
