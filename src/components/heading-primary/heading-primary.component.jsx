import React from "react";
import "../../App.scss"
export const HeadingPrimary = ({mainText, subText})=>{
    return(
        <h1 className="heading--primary">
                <span className="heading--primary--main">{mainText}</span>
                <span className="heading--primary--sub">{subText}</span>
        </h1>
    )
}