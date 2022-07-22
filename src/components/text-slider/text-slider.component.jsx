import React from "react";
import "../../App.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SliderContent } from "./slider-contents/slider-content.component";

export const TextSlider = ({ testimonials }) => {

    return (

        <div className="text-slider">
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3100}
            >
                {testimonials.map((testimoial) => {
                    return <SliderContent testimonial={testimoial} key={testimoial.id}/>
                })}
            </Carousel>
        </div>
    )

} 