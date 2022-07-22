import React from "react";
import { useState } from "react";
import "../../App.scss";

import { useLogin } from "../../Hooks/useLogin";

import { googleProvider , githubProvider, facebookProvider } from "./socialAuthMethod"


import google_photo from "./img/Google__G__Logo.svg"
import facebook_photo from "./img/facebook-new.png"
import github_photo from "./img/githubIcon.svg"
import { Textlabel_1 } from "../../components/TextFields/textfield.component"
import { SocialButn } from "./Social_login_bttn.component"

export default function LoginPage() {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const { login, error, isPending } = useLogin() 

  const ClickOnSocialButton = async(provider) => {
    login(null , null ,provider)
   }

  const handleSubmit = (e) => {
    login(email , password ,null)

  }


  return (
    <div className="SignandLogin_main">

      <Textlabel_1 state={email} setState={setemail} texttype='email' innertext='Email' />
      <Textlabel_1 state={password} setState={setpassword} texttype='password' innertext='Password' />


      { !isPending && <button className="SignandLogin_butt " onClick={handleSubmit}>Login </button>}
      { isPending && <div style={{filter: "grayscale(1)"}}><button className="SignandLogin_butt" disabled>Loading</button> </div>}
      { error && <p className="Error-hereby">{error}</p> } 

      &nbsp;
      <h3>OR</h3>
      <hr />
      <div>
        <div onClick={()=>ClickOnSocialButton(googleProvider)}> <SocialButn srcurl={google_photo} text="Login in with Google" /></div>
        <br></br>
        <div onClick={()=>ClickOnSocialButton(githubProvider)}> <SocialButn srcurl={github_photo} text="Login in with Github" /></div>
        <br></br>
        <div onClick={()=>ClickOnSocialButton(facebookProvider)}> <SocialButn srcurl={facebook_photo} text="Login in with Facebook" /></div>
      </div>
      <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
      <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
      <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
      <img alt="square" className="landing__testimonials__square landing__testimonials__images" />

    </div>)
}



