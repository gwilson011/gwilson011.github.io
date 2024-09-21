import React, { useEffect, useState } from "react";
import Image from "next/image";

const Gallery = () => {
    return (
        <div className="flex flex-col justify-center ml-10">
            <div className="Heading-text mt-[-150px]">gallery</div>
            <div className="flex flex-col gap-5 mt-[-60px]">
                <div className="flex flex-row gap-5 items-end">
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/ski.jpg"}
                            alt="ski"
                            width={400}
                            height={350}
                        />
                    </div>
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/fam.JPG"}
                            alt="ski"
                            width={550}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/santa.JPG"}
                            alt="ski"
                            width={300}
                            height={450}
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/camino.jpg"}
                            alt="ski"
                            width={300}
                            height={350}
                        />
                    </div>
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/potato.jpg"}
                            alt="ski"
                            width={250}
                            height={300}
                        />
                    </div>
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/paint.png"}
                            alt="ski"
                            width={450}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            className="rounded-3xl object-cover"
                            src={"/images/personal/soccer.jpeg"}
                            alt="ski"
                            width={150}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
