"use client";

import SkillDisplay from "../components/skill_display";

const Skills = () => {
    return (
        <div className="Page-container gap-10">
            <div className="flex flex-row justify-end">
                <p className="Heading-text">skills</p>
            </div>
            <SkillDisplay />
        </div>
    );
};

export default Skills;
