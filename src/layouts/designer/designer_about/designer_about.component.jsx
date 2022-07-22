import React from "react";
import { useLocation } from "react-router-dom";
import "../../../App.scss"

export const DesignerAbout = () => {
    const location = useLocation()
    return (
        <div className="u-padding-min about">
            <div className="about__item">
                <p className="about__key">Country: </p>
                <p className="about__value">Country</p>
            </div>
            <div className="about__item">
                <p className="about__key">Languages: </p>
                <p className="about__value">Country</p>
            </div>
            {
                location.pathname.includes("client")
                &&
                <div className="about__item">
                    <p className="about__key">Past Competition Completed: </p>
                    <p className="about__value">Country</p>
                </div>
            }
            {
                location.pathname.includes("designer")
                &&
                <div className="about__item">
                    <p className="about__key">Competitions Won: </p>
                    <p className="about__value">Country</p>
                </div>
            }
            {
                location.pathname.includes("client")
                &&
                <div className="about__item">
                    <p className="about__key">Current Competitions: </p>
                    <p className="about__value">Country</p>
                </div>
            }
            {
                location.pathname.includes("designer")
                &&
                <div className="about__item">
                    <p className="about__key">Currently Active: </p>
                    <p className="about__value">Country</p>
                </div>
            }
            {
                location.pathname.includes("designer")
                &&
                <div className="about__item">
                    <p className="about__key">Success Rate: </p>
                    <p className="about__value">Country</p>
                </div>
            }
           
            <div className="about__item">
                <p className="about__key">On Design Heaven Since: </p>
                <p className="about__value">Country</p>
            </div>

        </div>
    )
}