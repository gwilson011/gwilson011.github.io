"use client";
import Image from "next/image";
import ImageRotator from "../rotator/index";

export const Inspiration = () => {
    return (
        <div className="Inspo-Container rounded-2xl">
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
                <div
                    className="flex flex-col justify-center p-12 pl-24"
                    style={{ marginLeft: 50, marginTop: 230 }}
                >
                    <ImageRotator />
                    <Image
                        alt="shadow"
                        src={"/images/shadow.png"}
                        width={300}
                        height={300}
                        style={{
                            marginTop: 250,
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
                        I&apos;m inspired by people like{" "}
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
