import React from "react";
import "../../../App.scss"
import { NoRouteCardList } from "../../../components/card-list/noroute_card-list.component";

export const Inspirations = ({inspirations})=>{
    if(inspirations){
        if(inspirations.length!==0){
            return(
                <div>
                    <p className="competition__body__condition text text__key">Inspirations: </p>
                    <NoRouteCardList designs={inspirations} extendedStyle={`black`}/>
                </div>
            )
        }
    }
    
    
}