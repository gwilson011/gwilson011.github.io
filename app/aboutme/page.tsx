"use client";
import React from "react";
import "../../styles/aboutme.css";
import "../../styles/style.css";
import "../../styles/styles.scss";
import { Bubbles } from "../components/bubbles/index";
import { Inspiration } from "../components/inspiration/index";
import SmoothScroll from "../components/horizontal";
import { SkillDisplay } from "../components/skills";
import Image from "next/image";

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
                <Image
                    alt="grace pointer finger"
                    src={"/images/pointing.png"}
                    width={260}
                    height={260}
                ></Image>
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
                            <Image
                                alt="grace"
                                src={"/images/me_1.png"}
                                width={340}
                                height={550}
                                style={{
                                    marginTop: 100,
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
