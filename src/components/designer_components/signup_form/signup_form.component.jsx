import React, {useState} from "react";
import "../../../App.scss"
import { Btn_3 } from "../../buttons/btn_3/btn_3.component";




import { useSignup } from "../../../Hooks/useSignup"


export const DesignerSignupForm = () => {
    
    const { signup, error, isPending } = useSignup();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()  //to avoid referesh
        signup(email, password , "designer")
      }

    return (
        <form className="signup__form" onSubmit={e=>e.preventDefault()}>
            <div className="signup__form__group">
                <label htmlFor="first_name" className="signup__form__label">First Name</label>
                <input type="text" className="signup__form__input" id="first_name" required value = {firstName} onChange={(e)=> setFirstName(e.target.value)}/>

            </div>
            <div className="signup__form__group">
                <label htmlFor="last_name" className="signup__form__label">Last Name</label>
                <input type="text" className="signup__form__input" id="last_name" required value = {lastName} onChange={(e)=> setLastName(e.target.value)}/>

            </div>
            <div className="signup__form__group">
                <label htmlFor="email" className="signup__form__label">Email</label>
                <input type="email" className="signup__form__input" id="email" required value = {email} onChange={(e)=> setEmail(e.target.value)}/>

            </div>
            <div className="signup__form__group">
                <label htmlFor="password" className="signup__form__label">Password</label>
                <input type="password" className="signup__form__input" id="password" required value = {password} onChange={(e)=> setPassword(e.target.value)}/>

            </div>
            <div className="signup__form__group">
                <label htmlFor="confirm_password" className="signup__form__label">Confirm Password</label>
                <input type="password" className="signup__form__input" id="confirm_password" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="portfolio" className="signup__form__label">{`Add Portfolio (Behance, Dribble etc.)`}</label>
                <input type="text" className="signup__form__input" id="portfolio" value = {Cpassword} onChange={(e)=> setCpassword(e.target.value)}/>

            </div>

            {!isPending && <div onClick={handleSubmit}><Btn_3 text='Apply' to = "#"  extendedStyle="btn_3--green btn_3--clickable btn__animated--2 btn_3--full-width" /> </div> }
            {isPending && <div style={{filter: "grayscale(1)"}}><Btn_3 text='Singing Up' disabled extendedStyle="btn_3--green btn__animated--2 btn_3--full-width" /> </div>}

            {error && <p className="Error-signUp">{error}</p>}



        </form>
    )
}