"use client";

import Skill from "../skill";

const SkillDisplay = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="bg-white flex flex-col rounded-3xl w-[100%] h-[250px] p-8 gap-3">
                <div className="p-2 text-4xl text-darkBlue font-sans">
                    front end
                </div>
                <div className="flex flex-row gap-3">
                    <Skill skill="react" color="bg-violet-700" />
                    <Skill skill="typescript" color="bg-orange-400" />
                    <Skill skill="CSS" color="bg-red-600" />
                    <Skill skill="redux" color="bg-indigo-700" />
                    <Skill skill="next.js" color="bg-lime-400" />
                    <Skill skill="svelte" color="bg-teal-600" />
                    <Skill skill="react native" color="bg-amber-400" />
                </div>
            </div>
            <div className="flex flex-row rounded-lg w-[100%] h-[250px] gap-10">
                <div className="bg-white flex flex-col rounded-3xl w-[50%] p-8 gap-3">
                    <div className="p-2 text-4xl text-darkBlue font-sans">
                        back end
                    </div>
                    <div className="flex flex-row gap-3">
                        <Skill skill="Node.js" color="bg-green-700" />
                        <Skill skill="Express" color="bg-yellow-600" />
                        <Skill skill="CSS" color="bg-neutral-600" />
                    </div>
                </div>
                <div className="bg-white flex flex-col rounded-3xl w-[50%] p-8 gap-3">
                    <div className="p-2 text-4xl text-darkBlue font-sans flex justify-end">
                        languages
                    </div>
                    <div className="flex flex-row gap-3">
                        <Skill skill="python" color="bg-sky-800" />
                        <Skill skill="javascript" color="bg-fuchsia-500" />
                        <Skill skill="C++" color="bg-lime-800" />
                        <Skill skill="Swift" color="bg-pink-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDisplay;
