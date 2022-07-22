import React from "react";
import "../../../App.scss"

export const SliderContent = ({ testimonial }) => {
    return (
        <div>
            <img src={`https://robohash.org/${testimonial.id}?set=set2&size=180x180`} />
            <div className="myCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.designation}</h4>
                <p>{testimonial.body}</p>
            </div>
        </div>
    )
}