import React from "react";
import "../../App.scss"

export const SocialButn = ({ srcurl, text }) => {
    return (
        <div className="social-btn">

            <img className="social-icon" src={srcurl} />

            <p className="social-text"><b>{text}</b></p>
        </div>
    )
}

