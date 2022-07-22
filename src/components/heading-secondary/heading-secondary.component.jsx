import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text, extendedStyle, onClick, to, position }) => {
    const handleExtendedStyle = () => {
        if (extendedStyle) {
            return `${extendedStyle}`
        }
        return ""
    }
    const handleOnClick = () => {
        if (onClick) {
            return onClick()
        }
        else {
            return ""
        }
    }
    const handleTo = () => {
        if (to) {
            return `${to}`
        }
        else {
            return ""
        }
    }
    const handlePosition = () => {
        if (position) {
            return `${position}`
        }
        else {
            return ""
        }
    }
    return (
        <div
            className={`${handlePosition()} u-margin-bottom-small`}
            onClick={handleOnClick}
        >
            <h2 className={`heading-secondary ${handleExtendedStyle()}`}>
                {text}
            </h2>
        </div>
    )
}