"use client";

import SkillDisplay from "../components/skill_display";
import Image from "next/image";

const Skills = () => {
    return (
        <div className="Page-container gap-10 relative">
            <div className="flex flex-row justify-end">
                <p className="Heading-text">skills</p>
            </div>
            <div className="relative">
                <SkillDisplay />
                <Image
                    src="/images/eye.png"
                    alt="grace's eye"
                    width={180}
                    height={180}
                    className="absolute inset-0 mx-auto my-auto"
                />
            </div>
        </div>
    );
};

export default Skills;
