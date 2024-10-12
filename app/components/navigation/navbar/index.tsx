//Navbar code helped by:  https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
"use client";
import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./elements";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const currentRoute = usePathname();
    const onGit = () => {
        window.open("https://github.com/gwilson011", "_blank");
    };
    const onLinked = () => {
        window.open("https://linkedin.com/in/grace-wilson-688452196", "_blank");
    };
    return (
        <div className="bg-red-100">
            <Nav className="fixed flex h-full min-w-[350px] z-[100] items-center left-0 text-right bg-[#dff2ff] gap-4">
                <NavMenu className="absolute flex items-center -mr-5 flex-col left-[100px] gap-4">
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
                    <div className="">
                        <div className="flex flex-row gap-3 p-2">
                            <button
                                onClick={onGit}
                                className="w-auto h-auto hover:opacity-50"
                            >
                                <Image
                                    alt="git"
                                    src={"/images/github.png"}
                                    width={25}
                                    height={25}
                                ></Image>
                            </button>
                            <button
                                onClick={onLinked}
                                className="w-auto h-auto hover:opacity-50"
                            >
                                <Image
                                    alt="git"
                                    src={"/images/linked.png"}
                                    width={25}
                                    height={25}
                                ></Image>
                            </button>
                        </div>
                        <span className="text-[#7F94A1] font-louis">
                            {" "}
                            gwilson011@gmail.com
                        </span>
                    </div>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;
