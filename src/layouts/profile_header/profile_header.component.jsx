import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.scss";
import { Navbar } from "../../components/navbar/navbar.component";
const { faker } = require('@faker-js/faker');

export const ProfileHeader = ({navItems})=> {
    
        return (
            <div>
                <div className="profile__header">
                    <Navbar navItems={navItems} />
                </div>
            </div>

        )
    
}