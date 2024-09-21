//Navbar code helped by:  https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
"use client";
import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./elements";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const currentRoute = usePathname();
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink
                        href="/"
                        className={
                            currentRoute == "/"
                                ? "text-darkBlue"
                                : "text-navGrey"
                        }
                    >
                        home
                    </NavLink>
                    <NavLink
                        href="/aboutme"
                        className={
                            currentRoute == "/aboutme"
                                ? "text-darkBlue"
                                : "text-navGrey"
                        }
                    >
                        about me
                    </NavLink>
                    <NavLink
                        href="/skills"
                        className={
                            currentRoute == "/skills"
                                ? "text-darkBlue"
                                : "text-navGrey"
                        }
                    >
                        skills
                    </NavLink>
                    <NavLink
                        href="/resume"
                        className={
                            currentRoute == "/resume"
                                ? "text-darkBlue"
                                : "text-navGrey"
                        }
                    >
                        resume
                    </NavLink>
                    <NavLink
                        href="/projects"
                        className={
                            currentRoute == "/projects"
                                ? "text-darkBlue"
                                : "text-navGrey"
                        }
                    >
                        projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
