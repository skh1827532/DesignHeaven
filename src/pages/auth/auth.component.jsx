import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.scss"
import { Navbar } from "../../components/navbar/navbar.component";
import { AuthLayout } from "../../layouts/auth/auth_layout.component";
import { ProfileHeader } from "../../layouts/profile_header/profile_header.component";

export const Auth = ()=>{
    const navItems = {
        color:"white",
        navItemsLeft: [
            {
                id: 1,
                navText: 'About',
                to: '/about'
            },
            {
                id: 2,
                navText: 'FAQs',
                to: '/faqs'
            },
            {
                id: 3,
                navText: 'Hire',
                to: '/hire'
            },
            {
                id: 4,
                navText: 'Apply',
                to: '/apply'
            }
        ],
        navItemsRight: [
            {
                id: 1,
                navText: "Help Center",
                to: 'help_center'
            },
    
        ],  
        logo: {
            content: "../../abstracts/images/logo_1.svg",
            alt: "",
            width: "15%",
    
        },
        logoText: {
            id: 2,
            navText: 'g',
            to: '/account'
        }
    }
    return(
        <div>
            <ProfileHeader navItems={navItems}/>
            <AuthLayout/>
        </div>
    )

    
}