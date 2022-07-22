import React from "react";
import { useLocation } from "react-router-dom";
import "../../../../App.scss"
import { Btn_3 } from "../../../buttons/btn_3/btn_3.component";
import { HeadingSecondary } from "../../../heading-secondary/heading-secondary.component";

export const CompetitionDetailsHeader = ({ title }) => {
    const location = useLocation()
    
    return (
        <div className="competition__header">
            <div className="competition__header__pos">
                <HeadingSecondary
                    text={title}
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                />
                {
                    location.pathname.includes("designer")
                    &&
                    <Btn_3 text="Submit Designs" extendedStyle="btn_3--green btn_3--clickable u-pos-top-right" to={'/designer/submit_design'} />
                }

            </div>

        </div>
    )
}