import React, { useContext } from "react";
import "../../../App.scss"
import {CompetitionDetailsBody} from "../body_competition_details/body_competition_details.component";
import {CompetitionDetailsHeader} from "../../../components/designer_components/header/header_competition_details/header_competition_details.component"
import { CompetitionDetailsContext } from "../../../pages/main.component";

export const DesignerCompetitionDetails = ()=>{
    const {competitionDetails} = useContext(CompetitionDetailsContext)
    const [compDetails, setCompDetails] = competitionDetails
    return(
        <div>
            <CompetitionDetailsHeader title = {compDetails.creater}/>
            <CompetitionDetailsBody details = {compDetails}/>
        </div>
    )
}