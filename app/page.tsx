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
                    <Image
                        src="/images/wink.png"
                        width={500}
                        height={500}
                        alt="wink"
                    ></Image>
                </div>
            </div>
            <div className="Home">
                <Image
                    src="/images/signature.png"
                    style={{ marginTop: 100 }}
                    height={400}
                    width={400}
                    alt="signature"
                ></Image>
            </div>
        </div>
    );
};

export default Home;
