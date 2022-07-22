import React, { useState } from "react";
import "../../App.scss";
import { useLogout } from "../../Hooks/useLogout";
import { BrowserRouter, Route, Link, Outlet, NavLink, useLocation } from "react-router-dom";

export const Navbar = ({ navItems }) => {
    const {logout} = useLogout()
    const location = useLocation()
    const handleColor = () => {
        return navItems.color === "white" ? "white" : "black"
    }

    const handleIsActive = (navData) => {

        if (navData.isActive) {
            return `btn nav--item nav--item--${handleColor()} nav--item--is_active--${handleColor()}`
        }
        else {
            return `btn nav--item nav--item--${handleColor()}`
        }


    }

    return (
        <div>
            <nav className="nav">

                <div className="nav__items nav__items--left">
                    <img src="./" className="nav--img" alt={navItems.logo.alt} style={{ width: navItems.logo.width }} />
                    {navItems.navItemsLeft.map((item) =>
                        <NavLink
                            key={item.id}
                            className={handleIsActive} to={item.to}
                        >


                            {item.navText}
                        </NavLink>
                    )}
                </div>
                <div className="nav__items nav__items--right">

                    {navItems.navItemsRight.map((item) => {
                        return (
                            <NavLink
                                key={item.id}
                                className={handleIsActive} to={item.to}
                            >
                                {item.navText}
                            </NavLink>
                        )
                    }
                    )}
                    
                    {
                        (location.pathname.includes("client") || location.pathname.includes("designer"))
                        &&
                        <Link
                            key={navItems.logoText.id}
                            className={`btn nav--logo nav--logo--${handleColor()}`}
                            to="#"
                            onClick={logout}
                        >
                            Sign Out
                        </Link>
                    }

                </div>

            </nav>
        </div>

    );
};
