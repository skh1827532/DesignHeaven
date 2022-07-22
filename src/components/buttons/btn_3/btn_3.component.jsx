import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_3 = ({text,extendedStyle, onClick, to})=>{
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
        <NavLink className={`btn btn_3 ${handleExtendedStyle()}`} to={handleTo()} onClick={handleOnClick}>{text}</NavLink>
    )
}