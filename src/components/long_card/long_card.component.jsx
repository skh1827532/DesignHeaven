import React, { useContext } from "react";
import "../../App.scss"
import { Btn_3 } from "../buttons/btn_3/btn_3.component";
import { Btn_4 } from "../buttons/btn_4/btn_4.component";
import { HeadingSecondary } from "../heading-secondary/heading-secondary.component";
import { detailedCompetition } from "./designerEndDetails";
import { CompetitionDetailsContext } from "../../pages/main.component";

export const LongCard = ({ competition }) => {
    const { competitionDetails } = useContext(CompetitionDetailsContext)
    const [compDetails, setCompDetails] = competitionDetails

    const setCompetitionDetails = () => {
        setCompDetails(competition)
    }
    return (
        <div className="card--long">
            <img src={competition.inspirations[0]} className="card--long__image" alt="image" />
            <div className="card--long__details">
                <HeadingSecondary
                    text={competition.CompanyName}
                    extendedStyle={`heading-secondary--black heading-secondary--2`}
                />

                {
                    competition.logotype.map((item,i) =>
                        <Btn_3
                            key={i}
                            text={item}
                            extendedStyle={`btn_3--green btn__animated--2 u-space-between`}
                        />)
                }

                <p className="card--long__details__client">by <em>{competition.creater}</em></p>
                <p className="card--long__details__brief">{competition.Brief}</p>
            </div>
            <div className="card--long__status">
                <div className="left__display u-margin-bottom-small">
                    <i className="fa fa-clock-o text text__key" style={{ fontSize: "3rem" }}></i>
                    <p className="text text__value">10 hours left</p>
                </div>
                <div className="left__display u-margin-bottom-big">
                    <i className="fa fa-bar-chart text text__key" style={{ fontSize: "3rem" }}></i>
                    <p className="text text__value">10 entries</p>
                </div>
                <Btn_4
                    text="Apply" animation="2"
                    onClick={setCompetitionDetails}
                    to="/designer/competition/brief"
                    extendedStyle={`btn_4--white btn__animated--2`}
                />
            </div>


        </div>
    )

}

