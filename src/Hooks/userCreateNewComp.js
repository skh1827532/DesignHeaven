import { useState } from "react";

import {projectFirestore,storage} from '../Firebase/firebase-config'
import { useNavigate } from "react-router-dom";

import { useAuthContext } from './useAuthContext'


export const useCreateNewComp = () =>{
    const [isPending, setisPending] = useState(false)
    const navigate = useNavigate();
    
    const { user } = useAuthContext()
    //bring who is creating competition
    
    var docID

    const inspirationsURLS = []
    const createCompetition = (companyName,tagline,brief,extraNotes,templogotype,imgPaths) =>{

        // if(!imgPaths)
        setisPending(true)

        //add the compeititon.
        projectFirestore.collection("Competitions").add({
            CompanyName : companyName,      //add creator
            Tagline : tagline,
            Brief : brief,
            Extranotes :extraNotes,
            logotype : templogotype,
            creater : user.email,
            winner : false,
            winnerName : "",
            participants : [],
            inspirations : []

        })
        .then((docref)=>{
            // setisPending(false)
            // alert("document upload")
            docID = docref.id
        })
        .catch((e)=>{
            setisPending(false)
            console.log("Error adding document: ", e)
        })
        //now uplaod images
        let myPromise = new Promise((myResolve,myReject)=>{
            imgPaths.forEach((images,i)=>{
                console.log(i)
                const uploadTask = storage.ref(`Inspirations/${images.name}`)
                .put(images)
                
                    uploadTask.on(
                        "state_changed",
                        snapshot => {},
                        error => {
                            console.log(error);
                        },
                        () => {
                            storage
                            .ref("Inspirations")
                            .child(images.name)
                            .getDownloadURL()
                            .then(url => {
                                console.log(url)
                                inspirationsURLS.push(url)
                                projectFirestore.collection("Competitions").doc(docID).update({
                                    inspirations : inspirationsURLS
                                })
                            }).then(()=>{
                                console.log(i)
                                if(imgPaths.length-1===i){
                                    
                                    myResolve("OK")
                                }
                            })
                        }
                    )
            })
            
        })
        myPromise.then(()=>{
            console.log("inside then")
            setisPending(false)
            navigate("/client/dashboard/current")

        })
    }

    return { createCompetition , isPending }
}
