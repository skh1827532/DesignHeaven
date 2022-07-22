import React from "react";
import "../../../../App.scss"
import { Btn_5 } from "../../../buttons/btn_5/btn_5.component";
import { HeadingSecondary } from "../../../heading-secondary/heading-secondary.component";

export const ClientProfileHeader = ({ client }) => {
    return (
        <div className="profile--client__header__container">
            <img src={client.profilePic} alt="profile pic" className="profile--client__header__container__profile" />
            <div>
                <HeadingSecondary
                    text={client.name}
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                />
                <div>
                    <Btn_5
                        text="Start a New Competition"
                        extendedStyle={`btn_5--black btn__animated--2`}
                        to={`/client/new_competition`}
                    />
                </div>
            </div>
        </div>

    )
}