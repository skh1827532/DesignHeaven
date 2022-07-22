import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.scss"
import { ClientSignupForm } from "../../components/client_components/signup_form/signup_form.component";
import { DesignerSignupForm } from "../../components/designer_components/signup_form/signup_form.component";
import { HeadingSecondary } from "../../components/heading-secondary/heading-secondary.component";

export const SignUpLayout = () => {
    const location = useLocation()
    return (
        <div className="signup__container">
            <img alt="circle" className="signup__container__circle signup__container__images" />
            <img alt="sphere" className="signup__container__sphere signup__container__images" />
            <img alt="triangle" className="signup__container__triangle signup__container__images" />
            <img alt="square" className="signup__container__square signup__container__images" />
            <div className="signup__form__container">
                {
                    location.pathname.includes("client")
                    &&
                    <div>
                        <ClientSignupForm/>
                    </div>
                }
                {
                    location.pathname.includes("designer")
                    &&
                    <div>
                       <DesignerSignupForm/>
                        
                    </div>
                }
            </div>
        </div>
    )
}