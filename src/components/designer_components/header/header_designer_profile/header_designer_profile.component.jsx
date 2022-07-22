import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from "react";
import "../../../../App.scss"
import { Btn_3 } from "../../../buttons/btn_3/btn_3.component";
import { HeadingSecondary } from "../../../heading-secondary/heading-secondary.component";



export const DesignerProfileHeader = ({ designer }) => {
    return (
        <div>
            <HeadingSecondary
                text={designer.name}
                extendedStyle={`heading-secondary--black heading-secondary--1`}
                position="testimonials-past-format" />
            <div className="profile--designer__header__container" style={{ backgroundImage: `url(${designer.coverPic})` }}>
                <div
                    className="profile--designer__header__container__profile"
                    style={{ backgroundImage: `url(${designer.profilePic})` }}
                    alt="Profile Pic"
                >
                    <FontAwesomeIcon
                        icon={solid('pen-to-square')}
                        size="4x"
                        className="profile--designer__header__container__profile__edit" />
                </div>
                <Btn_3 text="Edit Cover" extendedStyle="btn_3--green btn_3--clickable u-pos-bottom-right" to={`/designer/profile/current`}/>
            </div>
        </div>
    )
}