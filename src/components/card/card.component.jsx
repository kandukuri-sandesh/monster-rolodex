import React from "react";
import {image} from "./card.styles.css"

export const Card = (props)=> {
    return(
    <div className="card" >
    <img className = "image" alt ="monster" src = {`https://robohash.org/${props.monster.id}?set=set2`} />
    <h2>{props.monster.name}</h2>
    <h3>{props.monster.email}</h3>
    </div>
    )
}