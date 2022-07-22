import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_4 = ({ text, extendedStyle, onClick, to }) => {
    const handleOnClick = () => {
        if (onClick) {
            return onClick()
        }
        else {
            return ""
        }
    }

    const handleExtendedStyle = () => {
        if (extendedStyle) {
            return `${extendedStyle}`
        }
        return ""
    }

    const handleTo = () => {
        if (to) {
            return `${to}`
        }
        else {
            return ""
        }
    }
    return (
        <NavLink
            className={`btn btn_4 ${handleExtendedStyle()}`}
            to={handleTo()}
            onClick={handleOnClick}
        >
            {text}
        </NavLink>
    )
}