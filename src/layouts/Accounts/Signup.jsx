import React from "react";
import { useState } from "react";

import '../../App.scss'

//importing hook
import { useSignup } from "../../Hooks/useSignup";

import { Textlabel_1 } from "../../components/TextFields/textfield.component"


export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');


  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()  //to avoid referesh
    signup(email, password)
    

  }

  return (
    <div className="main-SignUp">

      <div className="SignandLogin_main">

        <Textlabel_1 state={firstName} setState={setFirstName} texttype='text' innertext='First Name' />
        <Textlabel_1 state={lastName} setState={setLastName} texttype='text' innertext='Last Name' />
        <Textlabel_1 state={email} setState={setEmail} texttype='text' innertext='Email' />
        <Textlabel_1 state={password} setState={setPassword} texttype='password' innertext='Password' />
        <Textlabel_1 state={Cpassword} setState={setCpassword} texttype='password' innertext='Confirm Password' />

        <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
        <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
        <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
        <img alt="square" className="landing__testimonials__square landing__testimonials__images" />

        {!isPending && <button className="SignandLogin_butt" onClick={handleSubmit}>SignUp </button>}

        {isPending && <div style={{filter: "grayscale(1)"}}> <button className="SignandLogin_butt" disabled>loading</button></div>}
        {error && <p className="Error-hereby">{error}</p>}
        {/* if there is error then print it */}

      </div>
    </div>
  )
}

