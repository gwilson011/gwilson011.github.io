"use client";
import Image from "next/image";

export const Inspiration = () => {
    return (
        <div className="Inspo-Container">
            <div className="Inspo-Header">
                <p
                    style={{
                        color: "white",
                        fontFamily: "TangoSans",
                        fontSize: "500%",
                    }}
                >
                    inspiration
                </p>
            </div>
            <div className="Inspo-Body">
                <div style={{ marginLeft: 50 }}>
                    <Image
                        alt="frame"
                        src={"/images/frame.png"}
                        width={350}
                        height={350}
                        style={{
                            marginTop: 100,
                            marginLeft: 50,
                            right: 170,
                        }}
                    ></Image>
                    <Image
                        alt="shadow"
                        src={"/images/shadow.png"}
                        width={300}
                        height={300}
                        style={{
                            marginTop: 60,
                            marginLeft: 70,
                            right: 150,
                        }}
                    ></Image>
                </div>
                <div
                    style={{
                        width: 300,
                        marginLeft: 50,
                        marginTop: 170,
                    }}
                >
                    <p className="font-['LouisGeorgeCafe'] text-white text-xl">
                        I&apos; inspired by people like{" "}
                        <span className="font-['LouisGeorgeCafe-Bold'] text-2xl">
                            Steve Jobs
                        </span>{" "}
                        and{" "}
                        <span className="font-['LouisGeorgeCafe-Bold'] text-2xl">
                            Ada Lovelace
                        </span>{" "}
                        but also by people who were revolutionary in other
                        disciplines like the artist{" "}
                        <span className="font-['LouisGeorgeCafe-Bold'] text-2xl">
                            Pablo Picasso
                        </span>{" "}
                        and film director{" "}
                        <span className="font-['LouisGeorgeCafe-Bold'] text-2xl">
                            Damien Chazelle
                        </span>
                        .
                    </p>
                </div>
                <div>
                    <Image
                        alt="painting"
                        src={"/images/painting.png"}
                        width={500}
                        height={500}
                        style={{
                            marginTop: 50,
                            marginLeft: 30,
                            right: 150,
                        }}
                    ></Image>
                </div>
                <div
                    style={{
                        width: 300,
                        marginLeft: -20,
                        marginTop: 150,
                    }}
                >
                    <p className="font-['LouisGeorgeCafe-Bold'] text-white text-3xl">
                        <a href="http://meghan-barrett.com/blog/2016/09/07/the-poetical-science-of-ada-lovelace/">
                            &quot;Poetical Science&quot;
                        </a>
                    </p>
                    <p className="font-['LouisGeorgeCafe'] text-white text-xl my-8">
                        Ada Lovelace saw no need to separate poetry from the
                        sciences. Neither do I.
                    </p>
                    <p className="font-['LouisGeorgeCafe'] text-white text-xl my-8">
                        True power and creativity exists in building bridges
                        across areas of knowledge.
                    </p>
                </div>
            </div>
        </div>
    );
};
