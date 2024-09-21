"use client";

import Skill from "../skill";

const SkillDisplay = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="bg-white flex rounded-3xl w-[100%] h-[250px]">
                <Skill skill="react" color="violet-700" />
            </div>
            <div className="flex flex-row rounded-lg w-[100%] h-[250px] gap-10">
                <div className="bg-white flex rounded-2xl w-[50%]"></div>
                <div className="bg-white flex rounded-2xl w-[50%]"></div>
            </div>
        </div>
    );
};

export default SkillDisplay;
