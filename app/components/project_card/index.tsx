"use client";
export const ProjectCard = ({ ...props }) => {
    const onSource = () => {
        window.open(props.sourceLink, "_blank");
    };
    const onDemo = () => {
        window.open(props.demoLink, "_blank");
    };

    return (
        <div className="project-object w-96 p-8">
            <div className="flex flex-row justify-between pr-4">
                <h1 className="project-header">{props.title}</h1>
                <h1 className="text-sm text-darkBlue font-sans self-center">
                    {props.year}
                </h1>
            </div>
            <p className="project-text">{props.desc}</p>
            <div className="flex flex-row gap-3">
                <img
                    className="w-[225px] rounded-md p-10"
                    src={props.image}
                    style={{
                        width: "225px",
                        borderRadius: "25px",
                        padding: "10px",
                    }}
                ></img>
                <div className="flex flex-col gap-5 grow justify-center">
                    <button
                        onClick={onSource}
                        className="flex p-2 rounded-xl bg-darkBlue justify-center text-lightBlue font-sans"
                    >
                        source
                    </button>
                    <button
                        onClick={onDemo}
                        className="flex p-2 rounded-xl bg-darkBlue justify-center text-lightBlue font-sans"
                    >
                        demo
                    </button>
                </div>
            </div>
        </div>
    );
};
