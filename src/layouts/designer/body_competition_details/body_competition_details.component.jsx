import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../App.scss"
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component";
import { Btn_4 } from "../../../components/buttons/btn_4/btn_4.component";
import { CardList } from "../../../components/card-list/card-list.component";
// import { data1 } from "../../../components/card-list/designsData";
import { NoRouteCardList } from "../../../components/card-list/noroute_card-list.component";
import { ExtraNotes } from "./extranotes.component";
import { Inspirations } from "./inspirations.component";
import { projectFirestore } from "../../../Firebase/firebase-config";
import { CompetitionDetailsContext } from "../../../pages/main.component";

export const CompetitionDetailsBody = ({ details }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { winner } = useContext(CompetitionDetailsContext)
    const [winnerData, setWinnerData] = winner
    const [data1, setdata1] = useState([])
    let temparray = []

    useEffect(() => {


        projectFirestore.collection('Competitions').doc(details.docid).collection('designerSubmissions').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log()
                    temparray.push({ ...doc.data(), subdocid: doc.id })
                });
            }).catch((error) => {
                console.log(error)
            })
            .then(() => {
                setdata1(temparray)
                console.log(temparray)
            })
            .then(() => {
                temparray = []
            })
    }, [])
    const handleBtn1 = () => {
        if (location.pathname.includes("competition/brief")) {
            return "btn_4--white--selected"
        }
        return ""
    }
    const handleBtn2 = () => {
        if (location.pathname.includes("competition/designs")) {
            return "btn_4--white--selected"
        }
        return ""
    }
    return (
        <div>
            <div className="profile__links u-padding-min">

                <Btn_4
                    to={location.pathname.includes("designer") ? "/designer/competition/brief" : "/client/competition/brief"}
                    text="Brief"
                    extendedStyle={`btn_4--white btn__animated--2 ${handleBtn1()} u-space-between`}
                />
                <Btn_4
                    text="Designs"
                    to={location.pathname.includes("designer") ? "/designer/competition/designs" : "/client/competition/designs"}
                    extendedStyle={`btn_4--white btn__animated--2 ${handleBtn2()} u-space-between`}
                />


            </div>
            {
                location.pathname.includes("brief")
                &&
                <div>
                    <div className="competition__body">
                        <div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Company/Organization Name:`}</p>
                                <p className="text text__value">{details.CompanyName}</p>
                            </div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Tagline:`}</p>
                                <p className="text text__value">{details.Tagline}</p>
                            </div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Logo Type:`}</p>
                                {
                                    details.logotype.map((item, i) =>
                                        <Btn_3
                                            key={i}
                                            text={item}
                                            extendedStyle={`btn_3--green btn__animated--2 u-space-between`}
                                        />)
                                }
                            </div>
                            <div>
                                <p className="text text__key u-margin-bottom-small">{`Brief:`}</p>
                                <p className="text text__value">{details.Brief}</p>
                            </div>
                        </div>
                        <div>
                            <div className="center__display u-margin-bottom-small">
                                <i className="fa fa-clock-o text text__key" style={{ fontSize: "3rem" }}></i>
                                <p className="text text__value">12 hours left</p>
                            </div>
                            <div className="center__display">
                                <i className="fa fa-bar-chart text text__key" style={{ fontSize: "3rem" }}></i>
                                <p className="text text__value">20 entries</p>
                            </div>
                        </div>
                    </div>
                    <Inspirations inspirations={details.inspirations} />
                    <ExtraNotes extraNotes={details.Extranotes} />
                </div>
            }
            {
                location.pathname.includes("designs")
                &&
                <div className="u-padding-min">
                    {location.pathname.includes("designer")
                        &&
                        data1.map(subUrls => <div className="card-list">
                            {subUrls.submissionUrls.map(img => <img className="card-image card--hoverEffect-image" src={img}/>)}
                        </div>)
                    }
                    {location.pathname.includes("client")
                        &&
                        data1.map(subUrls => <div className="card-list">
                            {subUrls.submissionUrls.map(img => <img className="card-image card--hoverEffect-image" src={img} onClick={() => {
                                data1.map(data=>{
                                    if(data.submissionUrls.includes(img)){
                                        setWinnerData(data)
                                        console.log(data)
                                    }
                                })
                                if (location.pathname.includes("/client/competition/designs")) {
                                    navigate("/client/choose_winner")
                                }
                            }} />)}
                        </div>)
                    }

                </div>
            }


        </div>

    )
}