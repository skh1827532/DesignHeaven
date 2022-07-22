import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectAuth } from "../Firebase/firebase-config";
import {useAuthContext} from "./useAuthContext"

export const useLogout = () => {
    const navigate = useNavigate()
    const [isCancelled, setisCancelled ] = useState(false)
    const [error ,setError] = useState(null)
    const [isPending ,setisPending] = useState(false)
    const {dispatch} = useAuthContext()

    const logout = async () => {
        setError(null)
        setisPending(true)
        console.log("logout")
        //Sign the user out
        try {
            await projectAuth.signOut() //logout from database

            // logout from our global state of program
            dispatch({ type : 'LOGOUT'})
            if(!isCancelled){
                setisPending(false)
                setError(null)
            }

        } catch (err) {
            if(!isCancelled){
                console.log("login  here 2")

                console.log(err.message)
                
                setError(err.message)
                setisPending(false)
            }
        }finally{
            navigate("/")
        }
        
    }

    //following is a cleanup function may be used in future
    useEffect(() => {
      },()=>{ //cleanup if user switch the componenet before loging out

        return () =>{
            setisCancelled(true);
        }
    },[])

    return { logout, error, isPending }

}