import React from "react";
import { useLocation,Navigate, useNavigate } from "react-router-dom";
import "../../App.scss"
import { HeadingSecondary } from "../../components/heading-secondary/heading-secondary.component";
import { SigninForm } from "../../components/signin_form/signinform.component";
import { SignUpLayout } from "../signup_layout/signup_layout.component";

import { useAuthContext } from '../../Hooks/useAuthContext'


export const AuthLayout = () => {
    const location = useLocation()
    const { user, role , dispatch } = useAuthContext()
    const navigate = useNavigate()

    console.log("Role in auth layout componenet"+role)
    return (
        <div>

            {   
                !user && //user is null
                location.pathname.includes("signin")
                &&
                <div>
                    <div className="profile--designer__header u-center-text u-padding-min">
                        <HeadingSecondary
                            text="Sign In"
                            extendedStyle={`heading-secondary--black heading-secondary--1 `}
                        />
                    </div>
                    <div className="container">
                        <SigninForm />
                    </div>
                </div>
            }
            {
                !user && //user is null
                location.pathname.includes("signup")&&location.pathname.includes("client")
                &&
                <div>
                    <div className="profile--designer__header u-margin-bottom-small u-center-text u-padding-min">
                        <HeadingSecondary
                            text="Sign Up to get Started"
                            extendedStyle={`heading-secondary--black heading-secondary--1 `}
                        />
                    </div>
                    <div className="container">
                        <SignUpLayout/>
                    </div>
                </div>

            }
            {
                !user && //user is null
                location.pathname.includes("signup")&&location.pathname.includes("designer")
                &&
                <div>
                    <div className="profile--designer__header u-margin-bottom-small u-center-text u-padding-min">
                        <HeadingSecondary
                            text="Apply as Designer"
                            extendedStyle={`heading-secondary--black heading-secondary--1 `}
                        />
                    </div>
                    <div className="container">
                        <SignUpLayout/>
                    </div>
                </div>
            }
            
            
            {/* { user 
            && role==="desginer"
            && 
            <div>
                <Navigate to="/designer/dashboard"></Navigate>
            </div>
            }

            { user 
            && role==="client"
            && 
            <div>
                <Navigate to="/client/designer/current"></Navigate>
            </div>
            }
             */}

        </div>
    )
}