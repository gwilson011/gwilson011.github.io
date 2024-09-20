"use client";
import React from "react";
import "../../styles/aboutme.css";
import "../../styles/style.css";
import "../test/styles.scss";
import { Bubbles } from "../components/bubbles/index";
import { Inspiration } from "../components/inspiration/index";
import SmoothScroll from "../components/horizontal";
import { SkillDisplay } from "../components/skills";

const AboutMe = () => {
    return (
        <div className="Page-container">
            <div className="Heading-container" style={{ width: 880 }}>
                <p
                    className="Heading-text"
                    style={{
                        marginRight: 300,
                        position: "fixed",
                        width: 500,
                        height: 260,
                        right: 120,
                        top: -100,
                        zIndex: -110,
                    }}
                >
                    about me
                </p>
                <img
                    src={"/images/pointing.png"}
                    style={{
                        width: 260,
                        height: 260,
                        top: 0,
                    }}
                ></img>
            </div>
            <div style={{ marginTop: -250, zIndex: -100 }}>
                <SmoothScroll>
                    <div className="thumbnails">
                        <div style={{ width: "25vh" }}></div>
                        <div
                            className="About-body"
                            style={{ flexDirection: "row" }}
                        >
                            <Bubbles />
                            <img
                                src={"/images/me_1.png"}
                                style={{
                                    marginTop: 100,
                                    width: 340,
                                    height: 550,
                                    marginLeft: -90,
                                }}
                            />
                        </div>
                        <div style={{ width: "0vh" }}></div>
                        <Inspiration />
                        <SkillDisplay />
                    </div>
                </SmoothScroll>
            </div>
        </div>
    );
};

export default AboutMe;
