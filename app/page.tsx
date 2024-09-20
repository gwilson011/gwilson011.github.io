import React from "react";
import me from "../me.png";
import signature from "../public/signature.png";
import "../styles/style.css";
import { sign } from "crypto";
import Image from "next/image";

const Home = () => {
    return (
        <div className="Home-outer">
            <div className="Home">
                <div>
                    <p className="Heading-text">grace wilson</p>
                </div>
                <div>
                    <img
                        src="/images/wink.png"
                        style={{ marginLeft: -100, scale: 1.2 }}
                        alt="wink"
                    ></img>
                </div>
            </div>
            <div className="Home">
                <img
                    src="/images/signature.png"
                    style={{ height: 400, marginTop: 80 }}
                    alt="signature"
                ></img>
            </div>
        </div>
    );
};

export default Home;
