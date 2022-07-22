import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../../App.scss"
import { CardList } from "../card-list/card-list.component";




export const DesignsContainer = () => {


    const [designs,setDesigns] = useOutletContext()

    return (
        <>
        
        {designs.length!==0 &&<CardList designs={designs} extendedStyle={`black card-list--hoverEffect`}/>}
        </>
        
    )

}