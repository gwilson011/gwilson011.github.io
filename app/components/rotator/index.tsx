import React, { useEffect, useState } from "react";
import Image from "next/image";

const ImageRotator = () => {
    const images = [
        "/images/damien_square.png",
        "/images/picasso_square.jpg",
        "/images/ada_square.jpg",
        "/images/steve-jobs.png",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center">
                <Image
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    width={270}
                    height={270}
                    className="absolute" // Keeps it centered in the middle
                />
                <Image
                    alt="frame"
                    src={"/images/frame.png"}
                    width={350}
                    height={350}
                    className="absolute" // Keeps it centered in the middle
                />
            </div>
        </div>
    );
};

export default ImageRotator;
