import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss"
import { Btn_3 } from "../../components/buttons/btn_3/btn_3.component"
import { SocialButn } from "../../layouts/Accounts/Social_login_bttn.component";
import google_photo from "./img/Google__G__Logo.svg"
import github_photo from "./img/githubIcon.svg"

import { googleProvider, githubProvider } from "../../layouts/Accounts/socialAuthMethod"


import { useLogin } from "../../Hooks/useLogin"

export const SigninForm = () => {

    const [signinAs, setsigninAs] = useState("")

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const { login, error, isPending } = useLogin()


    const ClickOnSocialButton = async (provider) => {
        login(null, null, provider, signinAs)

    }

    const handleSubmit = () => {
        console.log("signinin as :" + signinAs)
        login(email, password, null, signinAs)

    }

    const preventRefresh = (e) => {
        e.preventDefault()
    }

    const onchangestatus = (e) => {
        setsigninAs(e.target.value)
    }


    return (
        <div className="signin_container">
            <div className="signin__logo">

                <div className="signin__logo__designer">
                    <div className="signin__logo__client">
                        Client
                    </div>
                    Designer
                </div>
            </div>
            <form className="signin__form" onSubmit={e => preventRefresh(e)}>
                <div className="signin__form__group">
                    <label htmlFor="email" className="signin__form__label">Email</label>
                    <input type="email" className="signin__form__input" id="email" required onChange={(e) => setemail(e.target.value)} />

                </div>
                <div className="signin__form__group">
                    <label htmlFor="password" className="signin__form__label">Password</label>
                    <input type="password" className="signin__form__input" id="password" required onChange={(e) => setpassword(e.target.value)} />

                </div>
                <div className="signin__form__grid">
                    <div>
                        <div style={{display:"inline-block", marginRight:'2rem'}}>
                            <input style={{display:"inline", marginRight:'.5rem' }} type="radio" value="designer" id="designer" name="type" onChange={onchangestatus} />
                            <label style={{display:"inline-block"}} htmlFor="designer" className="signin__form__label">Designer</label>
                        </div>
                        <div style={{display:"inline-block"}}>
                            <input style={{display:"inline", marginRight:'.5rem'}} type="radio" value="client" id="client" name="type" onChange={onchangestatus} />
                            <label style={{display:"inline-block"}} htmlFor="client" className="signin__form__label">Client</label>
                        </div>

                    </div>




                    {!isPending && <div onClick={e => handleSubmit(e)}> <Btn_3 text='Sign In' to="#" extendedStyle="full-width btn_3--green btn_3--clickable btn__animated--2" /> </div>}
                    {isPending && <div style={{ filter: "grayscale(1)" }}><Btn_3 text='Signing In Wait' extendedStyle="full-width btn_3--green btn__animated--2" disabled /></div>}

                </div>

                <p className="signin__form__route">
                    Do not have an account? Signup as a
                    <NavLink className="btn signin__form__route--to" to="signup/client"> Client </NavLink>
                    &nbsp; or
                    <NavLink className="btn signin__form__route--to" to="signup/designer">Designer</NavLink>
                </p>
                <div className="signin__form__grid">
                    <div onClick={() => ClickOnSocialButton(googleProvider)}>
                        <SocialButn srcurl={google_photo} text="Login in with Google" />
                    </div>
                    <div onClick={() => ClickOnSocialButton(githubProvider)}>
                        <SocialButn srcurl={github_photo} text="Login in with Github" />
                    </div>
                </div>
                {error && <p className="Error-hereby">{error}</p>}
            </form>
        </div>
    )
}