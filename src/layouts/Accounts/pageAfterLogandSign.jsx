import React from "react";

import '../../App.scss'
import { useAuthContext } from '../../Hooks/useAuthContext'
import {useLogout} from '../../Hooks/useLogout'

export default function AfterLogandSign() {
  const { user, role , dispatch } = useAuthContext()
  const { logout, error, isPending } = useLogout()

  console.log(user)
  return (
    <div className="main-SignUp">

      <div className="SignandLogin_main">
        <button onClick={logout}>Logout</button>
        {user && (<h1>USER :  {user.email} role : {role} </h1>)}        

      </div>
    </div>
  )
}

