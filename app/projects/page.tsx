import React from "react";
import "../../styles/style.css";
import "../../styles/projects.css";
import { ProjectCard } from "../components/project_card";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="Page-container flex flex-col">
            <div className="flex justify-start">
                <p className="Heading-text flex p-10">projects</p>
            </div>
            <div className="project-container">
                <Image
                    alt="grace doing a project"
                    src={"/images/hearts.png"}
                    width={350}
                    height={350}
                ></Image>
                <ProjectCard
                    title="topo"
                    year="2023"
                    image="/images/topo_preview.png"
                    desc="Web application that takes an input number of miles and gives
                the route with the least amount of elevation gain"
                    source=""
                    demo=""
                />
                <ProjectCard
                    title="record swap"
                    year="[in progress]"
                    image="/images/comingsoon.png"
                    desc="An iPhone App which connects and syncs with a spotify
                        account and allows user to easily share music with their
                        friends"
                    source=""
                    demo=""
                />
                <ProjectCard
                    title="bruinbuy"
                    year="2023"
                    image="/images/bruinbuy.png"
                    desc="Web application where students at UCLA can buy and sell
                        products to other students"
                    source="https://github.com/dianaestrada417/BruinBuy"
                    demo=""
                />
                <ProjectCard
                    title="the race"
                    year="2019"
                    image="/images/therace_1.png"
                    desc="Application created to be used in conjunction with a
                        large scale scavenger hunt, providing clues and
                        displaying real time data"
                    source=""
                    demo=""
                />
            </div>
        </div>
    );
};

export default Projects;
