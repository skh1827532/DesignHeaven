import React from "react";
import "../../App.scss"
import { Btn_1 } from "../buttons/btn_1/btn_1.component";
import { Btn_2 } from "../buttons/btn_2/btn_2.component";
import { HeadingPrimary } from "../heading-primary/heading-primary.component";

import { Link, Outlet } from "react-router-dom";

export const TextBox = () => {
    return (
        <div className="text-box">
            <img src="./" className="text-box__logo u-margin-bottom-small" alt="logo"></img>
            <HeadingPrimary mainText="Get your dream" subText="design job done!" />
            <div>
              
                <Btn_1 text="Hire a designer" to = "auth/signin"  extendedStyle={`btn_1--green btn__animated--1`}/>
                
            </div>
            <div>
             
                <Btn_2 text="Apply as a designer" to= "auth/signin" extendedStyle={`btn_2--white btn__animated--2`}/>
             
            </div>
            <Outlet /> 
        </div>
    )
}