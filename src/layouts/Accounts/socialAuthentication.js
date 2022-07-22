import {projectAuth} from "../../Firebase/firebase-config"
const socialMediaAuth = (provider) =>{
    return projectAuth.signInWithPopup(provider).then((res)=>{
        return res.user;
    }).catch((er)=>{
        return er;
    })
}

export default socialMediaAuth;