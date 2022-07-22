import React from "react";
import "../../../App.scss"

export const ExtraNotes = ({ extraNotes }) => {
    if (extraNotes) {
        if (extraNotes.length !== 0) {
            return (
                <div className="competition__body__condition">
                    <p className="text text__key u-margin-bottom-small">{`Extra Notes:`}</p>
                    <p className="text text__value">{extraNotes}</p>
                </div>
            )
        }
    }

}