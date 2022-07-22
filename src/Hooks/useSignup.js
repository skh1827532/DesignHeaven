import { useState, useEffect, useRef } from 'react'
import { db, projectAuth, firebase } from '../Firebase/firebase-config'

import { useAuthContext } from "./useAuthContext"

import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { user, dispatch } = useAuthContext()
  const navigate = useNavigate();

  const count = useRef(0);

  const signup = async (email, password, roleValue) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      res.user.updateProfile({
        displayName: roleValue
      })
      console.log(res)

      if (!res) {
        throw new Error('Could not complete signup')
      }


      // console.log("finalemail"+ finalStr)
      // await db.ref('users/'+ finalStr).set({role: roleValue});
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: [res.user, roleValue] })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        if (roleValue === 'client') {
          navigate("/client/dashboard/current")
        }
        if (roleValue === 'designer') {
          navigate("/designer/dashboard")
        }


        // navigate("/afterLogandSign");

      }
      // console.log(useAuthContext.state)
    }
    catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)

      }
    }

  }

  useEffect(() => {
    // count.current = count.current + 1;
    // console.log(count.current)
  },
    () => {
      return () => {
        console.log("cleanup called")
        setIsCancelled(true)
      }
    }, [])



  return { signup, error, isPending }
}