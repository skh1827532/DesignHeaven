import React from "react";
import "../../../App.scss"
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component";
import FileUploader from "../../../components/file_uploader/file_uploader.component";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";
import { useState } from "react";
import { useContext } from "react";


import {useSubmitDesign} from '../../../Hooks/useSubmitDesign'
import { CompetitionDetailsContext } from "../../../pages/main.component";

export const SubmitDesign = () => {
    const {competitionDetails} = useContext(CompetitionDetailsContext)
    const [compDetails, setCompDetails] = competitionDetails

    const [imgPaths , setimgPaths] = useState([])

    const [brief,setbrief] = useState("")


    const { submitDesign , isPending } = useSubmitDesign()

    const handleSubmit = () => {
        
        submitDesign(compDetails.docid,imgPaths,brief)
    }


    return (
        <div>
            <div className="dashboard--designer__header u-margin-bottom-small">
                <HeadingSecondary
                    text="Submit New Designs"
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                    position="testimonials-past-format" />
            </div>
            <form className="submit__designs">
                <div className="submit__designs__grid">
                    <div className="submit__designs__buttons">
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        <FileUploader setImagePath={setimgPaths}/>
                        
                    </div>
                    <div className="submit__designs__details">
                        <div className="submit__designs__group">
                            <label htmlFor="brief" className="competition__form__label">Brief</label>
                            <textarea className="competition__form__input submit__designs__input--brief" id="brief" required value = {brief} onChange={(e)=> setbrief(e.target.value)}/>
                        </div>
                        {!isPending &&<Btn_3 text='Submit Designs' to="#" onClick={handleSubmit} extendedStyle="btn_3--green btn_3--clickable u-margin-top-small" /> }

                        {isPending && <div style={{filter: "grayscale(1)"}}> 
                        <Btn_3 text='Submiting' extendedStyle="btn_3--green btn_3--clickable u-margin-top-small" />
                        </div>} 
                    
                    </div>
                </div>
            </form>
        </div>
    )
}