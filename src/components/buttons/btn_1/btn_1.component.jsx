import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_1 = ({text,extendedStyle, onClick, to})=>{
    const handleExtendedStyle = ()=>{
        if(extendedStyle){
            return `${extendedStyle}`
        }
        return ""
    }
    const handleOnClick = ()=>{
        if(onClick){
            return onClick()
        }
        else{
            return ""
        }
    }
    const handleTo =()=>{
        if(to){
            return `${to}`
        }
        else{
            return ""
        }
    }

    return(
        <NavLink className={`btn btn_1 ${handleExtendedStyle()} `} onClick={handleOnClick} to={handleTo()}>{text}</NavLink>
    )
}