"use client";
import React from "react";
import "../../styles/aboutme.css";
import "../../styles/style.css";
import "../../styles/styles.scss";
import { Bubbles } from "../components/bubbles/index";
import { Inspiration } from "../components/inspiration/index";
import SmoothScroll from "../components/horizontal";
import Image from "next/image";
import Gallery from "../components/gallery";

const AboutMe = () => {
    return (
        <div className="Page-container">
            <div className="flex flex-row justify-end">
                <p className="Heading-text">about me</p>
                <Image
                    alt="grace pointer finger"
                    src={"/images/pointing.png"}
                    width={260}
                    height={260}
                ></Image>
            </div>
            <div className="gap-10 mt-[-250px]">
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
                                width={360}
                                height={480}
                                style={{
                                    marginTop: 100,
                                    marginLeft: -90,
                                }}
                            />
                        </div>
                        <div style={{ width: "0vh" }}></div>
                    </div>
                    <Inspiration />
                    <Gallery />
                </SmoothScroll>
            </div>
        </div>
    );
};

export default AboutMe;
