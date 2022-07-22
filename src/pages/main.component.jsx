import React, { useState } from "react";
import '../App.scss'
import { ProfileHeader } from "..//layouts/profile_header/profile_header.component";
import { Outlet, useLocation } from "react-router-dom";
export const CompetitionDetailsContext = React.createContext()


export const MainPage = () => {
    const [compDetails, setCompDetails] = useState({})
    const [winnerData, setWinnerData] = useState({})
    const location = useLocation()
    const navItemsClient = {
        color: "white",
        navItemsLeft: [

            {
                id: 3,
                navText: 'Dashboard',
                to: 'dashboard/current'
            },
            {
                id: 2,
                navText: 'Contact Us',
                to: '/contactus'
            },


        ],
        navItemsRight: [
            {
                id: 1,
                navText: "Help Center",
                to: 'helpcenter'
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
    const navItemsDesigner = {
        color: "white",
        navItemsLeft: [
            {
                id: 1,
                navText: 'Dashboard',
                to: 'dashboard'
            },
            {
                id: 3,
                navText: 'Profile',
                to: 'profile/current'
            },
            {
                id: 2,
                navText: 'Contact Us',
                to: '/contactus'
            },


        ],
        navItemsRight: [
            {
                id: 1,
                navText: "Help Center",
                to: 'helpcenter'
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
    return (
        <div>
            {
                location.pathname.includes("designer")
                &&
                <ProfileHeader navItems={navItemsDesigner} />
            }
            {
                location.pathname.includes("client")
                &&
                <ProfileHeader navItems={navItemsClient} />
            }

            <CompetitionDetailsContext.Provider value={{
                competitionDetails: [compDetails, setCompDetails],
                winner: [winnerData, setWinnerData]
            }}>
                <Outlet />
            </CompetitionDetailsContext.Provider>


        </div>
    )


}