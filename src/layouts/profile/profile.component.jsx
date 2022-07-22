import React, { useEffect, useState } from "react";
import "../../App.scss"
import { DesignerProfileHeader } from "../../components/designer_components/header/header_designer_profile/header_designer_profile.component";
import { Btn_4 } from "../../components/buttons/btn_4/btn_4.component";
import { Outlet, useLocation } from "react-router-dom";
import { data1, data2, data3 } from "./designsData";
import { ClientProfileHeader } from "../../components/client_components/header/header_client_profile/header_client_profile.component";
import { useAuthContext } from '../../Hooks/useAuthContext'

import {projectFirestore} from '../../Firebase/firebase-config'



const { faker } = require('@faker-js/faker');

export const Profile = () => {
    
    
    const { user } = useAuthContext()

    
    // const [designs, setDesigns] = useState(arrayCreated)
    let temparray = [];
    const location = useLocation()
    const [designs, setDesigns] = useState([])

    var userEmail= "Not Loged in";

    if(user){
        userEmail = user.email
    }


    const [designer,setdesigner] = useState({})
    const [client,setclient] = useState({})

    useEffect(() => {


        setdesigner( {
            name: userEmail,
            profilePic: faker.image.avatar(),
            coverPic: faker.image.imageUrl(),
        })

        setclient( {
            name: userEmail,
            profilePic: faker.image.avatar(),
            coverPic: faker.image.imageUrl(),
        })

        var refere; 

        if (location.pathname.includes("client/dashboard/current")){
            refere = projectFirestore.collection("Competitions").where("creater","==",user.email).where("winner","==",false)
        }
        if (location.pathname.includes("client/dashboard/past")){
            refere = projectFirestore.collection("Competitions").where('winner','==',true).where("creater","==",user.email)
        }

        if (location.pathname.includes("designer/profile/current")){
            refere = projectFirestore.collection("Competitions").where('winner','==',false).where('participants','array-contains-any',[user.email])
        }
        if (location.pathname.includes("designer/profile/past")){
            refere = projectFirestore.collection("Competitions").where('participants','array-contains-any',[user.email]).where("winner","==",true)
        }

        refere.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                temparray.push({...doc.data(),docid:doc.id})
            });
        }).catch((error)=>{
            console.log(error)
        })
        .then(()=>{
            setDesigns(temparray,console.log("current designs=>" + designs))
            temparray = []
        })  

        return ()=>{
            setDesigns([])
        }
    },[location])

   
    const handleBtn1 = ()=>{
        if (location.pathname.includes("profile/current")){
            return "btn_4--white--selected"
        }
        return ""
    }
    const handleBtn2 = ()=>{
        if (location.pathname.includes("profile/past")){
            return "btn_4--white--selected"
        }
        return ""
    }
    const handleBtn3 = ()=>{
        if (location.pathname.includes("profile/about")){
            return "btn_4--white--selected"
        }
        return ""
    }

    return (
        <div className="profile">
            <div className="profile--designer__header u-margin-bottom-small">
                {
                    location.pathname.includes("designer")
                    &&
                    <DesignerProfileHeader designer={designer} />
                }
                {
                    location.pathname.includes("client")
                    &&
                    <ClientProfileHeader client={client} />
                }
            </div>

            <div className="profile__links u-margin-bottom-medium">
                <Btn_4 text="Current" to="current" extendedStyle={`btn_4--white btn__animated--2 ${handleBtn1()} u-space-between`} />
                <Btn_4 text="Past" to="past" extendedStyle={`btn_4--white btn__animated--2 ${handleBtn2()} u-space-between`} />
            </div>
            <Outlet context={[designs,setDesigns]} />

        </div>
    )
            

}
