import React from "react";
import "../App.scss";
import { Link,  BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LogoImg from "../abstracts/images/logo_1.svg"

import {Btn_1} from "../components/buttons/btn_1/btn_1.component"



export class AccountPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>

        <img style={{ display:"flex", width: "150px",
        height: "150px", margin:"auto"}} className="login_logo" src={LogoImg} alt="" />
        
        <div style={{ display: "flex", justifyContent : "center",}}>
          <Link to="/account/login" > <Btn_1 text = "login"/> </Link>
          <Link style={{marginLeft:"18px"}} to="/account/signup" > <Btn_1 text = "SignUp"/> </Link>

        </div>
          <Outlet /> 
      
      </>
    );
  }
}
