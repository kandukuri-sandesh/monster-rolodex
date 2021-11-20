import React from "react";
import search from "./search-box.styles.css"
export const SearchBox = ({placeholder,handlechange})=> {
    return(
        
        <input type = "search" className="search" placeholder = {placeholder} onChange = {handlechange}></input>

        
    )
} 