"use client";
import clsx from "clsx";

const Skill = ({ ...props }) => {
    return (
        <div
            className={clsx(
                `flex self-start rounded-xl p-2 px-4 text-white text-lg font-sans`,
                props.color
            )}
        >
            {props.skill}
        </div>
    );
};

export default Skill;
