"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { users } from "../../../users";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    PromiseLikeOfReactNode,
} from "react";

const bubbles = [
    "I’m a junior at UCLA getting my degree in computer science, and a minor in philosophy",
    "My current goal is simple: learn and grow as much as possible. Join me as I navigate the exciting fusion of technology and philosophy, aiming to leave a mark on the world through what I create.",
    "Beyond coding, you'll find me painting, reading, exploring movies and video games, and (attempting to) run. I'm fueled by Dr Pepper (see photo) and chocolate, and I love the vibrant energy of live concerts.",
];

export const Scroll = () => {
    return (
        <div className="bg-clear flex flex-col w-[120vh]">
            <ScrollCore text={text} />
        </div>
    );
};

export const ScrollCore = (text: any) => {
    const { scrollYProgress } = useScroll();

    const translate = useTransform(scrollYProgress, [0, 1], [150, 0]);

    return (
        <div className="transform scale-[0.8] flex items-center justify-center relative ">
            <div
                className="w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Card translate={translate} />
            </div>
        </div>
    );
};

export const Card = ({ translate }: { translate: any }, text: string) => {
    return (
        <div className="w-full rounded-2xl grid gap-4 p-4">
            <motion.div
                className="bg-white rounded-full cursor-pointer relative w-full"
                style={{ translateY: translate }}
                whileHover={{
                    boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
            >
                <div className="absolute top-2 right-2 rounded-full text-xs font-bold px-2 py-1 text-black">
                    test
                </div>
                <div className="p-4">
                    <h1 className="font-TangoSans text-sm text-black bg-lightGrey">
                        {text}
                    </h1>
                </div>
            </motion.div>
        </div>
    );
};
