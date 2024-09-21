"use client";

const Skill = ({ ...props }) => {
    return (
        <div
            className={`flex rounded-full p-2 bg-${props.color} text-black font-sans`}
        >
            {props.skill}
        </div>
    );
};

export default Skill;
