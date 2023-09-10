import React from "react";
import "./Card.css"



function onProblemClickHandles(val, category){
    console.log("Saurav clicked",category,val);
}

function Card(props){
    console.log("Saurav",props.head, props.problems)
    return (
        <>
        <div id="CardSection">
            <div id="CardHeader">{props.head}</div>
            {props.problems.map(val => (<button id="Card" onClick={() => onProblemClickHandles(val, props.head)}>{val}</button>))}
        </div>
        </>
    )
}

export default Card;