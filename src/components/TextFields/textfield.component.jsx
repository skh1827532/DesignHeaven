import React from "react";
import "../../App.scss"

export const Textlabel_1 = ({ state, setState,texttype ,innertext})=>{
    return(
        <div className="input-field">
            <div className="border-bottom">
                <input type={texttype} value = {state} onChange={(e)=> setState(e.target.value)} placeholder={innertext} autoComplete="off"></input>
            </div>
        </div>
    )
}