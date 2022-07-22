import { useState } from "react";

import { firebase, projectFirestore, storage } from '../Firebase/firebase-config'
import { useNavigate } from "react-router-dom";

import { useAuthContext } from './useAuthContext'


export const useSubmitDesign = () => {
    const [isPending, setisPending] = useState(false)
    const navigate = useNavigate();

    const { user } = useAuthContext()
    //bring who is creating competition

    var docID

    const submissionURLS = []
    const submitDesign = (compId, imgPaths, brief) => {


        setisPending(true)



        //first uplaod images

        let myPromise = new Promise((myResolve, myReject) => {
            
            projectFirestore.collection("Competitions").doc(compId).update({
                participants: firebase.firestore.FieldValue.arrayUnion(user.email)
            })
            
            imgPaths.forEach((images, i) => {
                console.log(i)
                const uploadTask = storage.ref(`Inspirations/${images.name}`)
                    .put(images)

                uploadTask.on(
                    "state_changed",
                    snapshot => { },
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
                                submissionURLS.push(url)
                                // projectFirestore.collection("Competitions").doc(docID).update({
                                //     inspirations : inspirationsURLS
                                // })
                            }).then(() => {
                                console.log(i)
                                if (imgPaths.length - 1 === i) {

                                    myResolve("OK")
                                }
                            })
                    }
                )
            })

        })
        myPromise.then(() => {
            console.log("inside then")

            //add the submissions.
            projectFirestore.collection("Competitions").doc(compId).collection('designerSubmissions').add({
                
                Brief: brief,
                submittor : user.email,
                submissionUrls: submissionURLS

            })
                .then((docref) => {
                    // setisPending(false)
                    // alert("document upload")
                   
                })
                .catch((e) => {
                    setisPending(false)
                    console.log("Error submitting document: ", e)
                })

            setisPending(false)


        })
    }

    return { submitDesign, isPending }
}
