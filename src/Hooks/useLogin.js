import { useState, useEffect , useRef } from "react";
import { storage , projectAuth } from "../Firebase/firebase-config";
import { useAuthContext } from "./useAuthContext"
import { useNavigate  } from "react-router-dom";
import socialMediaAuth from '../layouts/Accounts/socialAuthentication'

import {useLogout} from './useLogout'

export const useLogin = () => {

    const { logout} = useLogout()
    const [isCancelled, setisCancelled ] = useState(false)
    const [error ,setError] = useState(null)
    const [isPending ,setisPending] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();

    const login = async (email,password, provider ,signinAs ) => {
        setError(null)
        setisPending(true)

        //Sign the user out
        try {

            if(email==null && password== null){

                const res = await socialMediaAuth(provider)
                dispatch({ type : 'LOGIN', payload : [res,signinAs]})   

            }
            
            if(provider == null){
                const res = await projectAuth.signInWithEmailAndPassword(email,password) //logout from database
                
                //compare the display name
                //if not matched then logout
                console.log("res.user.displayName "+res.user.displayName)

                if(res.user.displayName===signinAs){
                    console.log("matched sigining in "+signinAs)
                    dispatch({ type : 'LOGIN', payload : [res.user , signinAs]})
                    
                }
                else{
                    console.log(signinAs)
                
                    var str = "This account is not registered as "+ signinAs + " Please register first"
                    // logout()
                    throw new Error( str )
                }
                
            }
            // logout from our global state of program
            if(!isCancelled){
                setisPending(false)
                setError(null)
                if(signinAs==='client'){
                    navigate("/client/dashboard/current")
                }
                if(signinAs==='designer'){
                    navigate("/designer/dashboard")
                }
            }

        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setisPending(false)
            }
        }

    }
    useEffect(() => {
      },
      ()=>{ //cleanup if user switch the componenet before loging out

        return () =>{
            setisCancelled(true);
        }
    },[])

    return { login, error, isPending }

}