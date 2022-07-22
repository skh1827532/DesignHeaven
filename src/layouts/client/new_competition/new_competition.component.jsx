import React, { useState } from "react";

import "../../../App.scss"
import { DropDown } from "../../../components/dropdown/dropdown.component";
import FileUploader from "../../../components/file_uploader/file_uploader.component";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component";



import {useCreateNewComp} from '../../../Hooks/userCreateNewComp'

export const NewCompetition = () => {
    
    
    const { createCompetition , isPending } = useCreateNewComp()

    const [companyName,setcompanyName] = useState("")
    const [tagline,settagline] = useState("")
    const [brief,setbrief] = useState("")
    const [extraNotes,setextraNotes] = useState("")
    const [templogotype,settemplogotype] = useState([])
    
    const [imgPaths , setimgPaths] = useState([])
    var checker = false

    
    const handleSubmit = () => {
        const logotype = []
        templogotype.map(item=>logotype.push(item.key))
        createCompetition(companyName,tagline,brief,extraNotes,logotype,imgPaths)
    }
    

    return (
        <div className="dashboard--designer">
            <div className="dashboard--designer__header u-margin-bottom-small">
                <HeadingSecondary
                    text="New Competition"
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                    position="testimonials-past-format" />
            </div>
            <form className="competition__form">
                <div className="competition__form__grid">
                    <div>
                        <div className="competition__form__group">
                            <label htmlFor="name" className="competition__form__label">Company/Organization Name</label>
                            <input type="text" className="competition__form__input" id="name" required value = {companyName} onChange={(e)=> setcompanyName(e.target.value)}/>

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="tagline" className="competition__form__label">Tagline</label>
                            <input type="text" className="competition__form__input" id="tagline" required value = {tagline} onChange={(e)=> settagline(e.target.value)} />

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="dropdown" className="competition__form__label">Logotype</label>
                            <DropDown setlogo  = {settemplogotype}/>

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="brief" className="competition__form__label">Brief</label>
                            <textarea className="competition__form__input competition__form__input--brief" id="brief" required value = {brief} onChange={(e)=> setbrief(e.target.value)}/>

                        </div>
                    </div>
                    <img alt="circle" className="competition__form__circle" />
                </div>
                <div className="competition__form__group">
                    <label htmlFor="inspiration" className="competition__form__label">Inspiration</label>
                    <div className="competition__form__inspirations">
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                    </div>

                </div>
                <div className="competition__form__group">
                    <label htmlFor="extranotes" className="competition__form__label">Extra Notes</label>
                    <input type="text" className="competition__form__input" id="extranotes" value = {extraNotes} onChange={(e)=> setextraNotes(e.target.value)} />

                </div>
                {!isPending && <Btn_3 text='Start Competition' to = "#" onClick={handleSubmit} extendedStyle="btn_3--green btn_3--clickable btn_3--full-width" />}
                {isPending && <div style={{filter: "grayscale(1)"}}><Btn_3 text='Wait!! Creating component'  extendedStyle="btn_3--green btn_3--clickable btn_3--full-width"/> </div>}

            </form>
        </div>
    )
}