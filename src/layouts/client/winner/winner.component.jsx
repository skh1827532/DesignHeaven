import React, { useContext, useState } from "react";
import "../../../App.scss"
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component"
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component"
import { NoRouteCardList } from "../../../components/card-list/noroute_card-list.component";
import { CompetitionDetailsContext } from "../../../pages/main.component";
import { projectFirestore } from "../../../Firebase/firebase-config";

export const Winner = () => {
  const { winner } = useContext(CompetitionDetailsContext)
  const [winnerData, setWinnerData] = winner
  const { competitionDetails } = useContext(CompetitionDetailsContext)
  const [compDetails, setCompDetails] = competitionDetails
  const [isPending, setisPending] = useState(false)
  const handlewinner = () =>{
    
    setisPending(true)

    projectFirestore.collection("Competitions").doc(competitionDetails[0].docid).update({
        winner : true,
        winnerName : winner[0].submittor

      })
    console.log(winner)
    console.log(competitionDetails[0].docid)
    console.log(winner[0].submittor)

    console.log(competitionDetails)
    
  }
  return (
    <div>
      <div className="dashboard--designer__header u-margin-bottom-small">
        <HeadingSecondary
          text="Designer name"
          extendedStyle={`heading-secondary--black heading-secondary--1`}
          position="testimonials-past-format" />
      </div>

      <div className="winner__grid">
        <div className="winner__grid__images">
          <NoRouteCardList designs={winner[0].submissionUrls} extendedStyle="card-list--winner" />
        </div>
        <div>
          <p className="winner__grid__brief u-margin-bottom-small">Brief</p>
          <div className="winner__grid__brief__text">{`${winner[0].Brief}`}</div>
          {!isPending && <Btn_3 text='Select Winner' onClick={handlewinner} to= "#" extendedStyle="btn_3--green btn_3--clickable u-margin-top-small" />}
          
        </div>
      </div>

    </div>
  )
}