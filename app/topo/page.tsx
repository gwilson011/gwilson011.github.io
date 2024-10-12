"use client";
import { Map } from "./Map";
import { useEffect, useState, ChangeEvent } from "react";
import { RouteInfoBox } from "./RouteInfoBox";
import Image from "next/image";

// Define the types for the route info and start point
type RouteInfo = {
    // Add the structure of routeInfo based on your project (example below)
    distance: number;
    elevationGain: number;
    route: string[];
};

type Coordinates = [number, number];

function Topo() {
    // Specify the types of state variables
    const [distance, setDistance] = useState<string | undefined>();
    const [long, setLong] = useState<string | undefined>();
    const [lat, setLat] = useState<string | undefined>();
    const [submittedDistance, setSubmittedDistance] = useState<number>(0);
    const [startPoint, setStartPoint] = useState<Coordinates>([
        37.7749, -122.4194,
    ]);
    const [selectedOption, setSelectedOption] = useState<string>("current");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

    // Handle input changes with proper event typing
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDistance(value);
    };

    const handleLongChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setLong(value);
    };

    const handleLatChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setLat(value);
    };

    const handleStartPointChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const startAlgorithm = async () => {
        if (isNaN(parseFloat(distance ?? ""))) {
            setError("Invalid longitude and/or latitude");
            return;
        }
        if (parseFloat(distance ?? "") > 15) {
            setError("Value exceeds 15");
            return;
        }
        if (parseFloat(distance ?? "") === submittedDistance) {
            return;
        }
        setLoading(true);
        if (selectedOption === "current") {
            try {
                const position = await new Promise<GeolocationPosition>(
                    (resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(
                            resolve,
                            reject
                        );
                    }
                );

                console.log(position);
                setStartPoint([
                    position.coords.latitude,
                    position.coords.longitude,
                ]);
                console.log("updated");
            } catch (error) {
                console.error("Error getting location:", error);
                setError("Could not get current location");
            }
        } else {
            let lt = parseFloat(lat ?? "");
            let lg = parseFloat(long ?? "");
            if (!isNaN(lt) && !isNaN(lg)) {
                setStartPoint([lt, lg]);
            } else {
                setError("Invalid longitude and/or latitude");
            }
        }
        setSubmittedDistance(parseFloat(distance ?? ""));
        setError(null);
    };

    useEffect(() => {
        console.log(routeInfo);
    }, [routeInfo]);

    return (
        <div className="flex flex-row justify-between">
            <div className="flex justify-center bg-white w-[350px]"></div>
            <div className="flex justify-center bg-white w-[50%] gap-4">
                <div className="mt-10">
                    <a
                        className="text-black rounded-sm px-3 font-sans hover:text-slate-400"
                        href="/projects"
                    >
                        {"<"} BACK
                    </a>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <div className="flex justify-center w-auto">
                        <h1 className="font-sans text-black text-5xl">TOPO</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center gap-3">
                            <select
                                className="rounded-sm p-2 w-full text-black bg-gray-200"
                                id="location-select"
                                value={selectedOption}
                                onChange={handleStartPointChange}
                            >
                                <option value="current">
                                    Current Location
                                </option>
                                <option value="custom">
                                    Custom Coordinates
                                </option>
                            </select>
                        </div>
                        {selectedOption === "custom" && (
                            <div className="flex flex-row items-center gap-2">
                                <label
                                    className="font-sans text-black"
                                    htmlFor="latitude"
                                >
                                    LAT{" "}
                                </label>
                                <input
                                    className="distance rounded-sm p-2 text-black w-[90px] bg-gray-200"
                                    type="number"
                                    id="latitude"
                                    placeholder=""
                                    onChange={(e) => handleLatChange(e)}
                                />
                                <label
                                    className="font-sans text-black"
                                    htmlFor="longitude"
                                >
                                    LONG{" "}
                                </label>
                                <input
                                    className="distance rounded-sm p-2 w-[90px] text-black bg-gray-200"
                                    type="number"
                                    id="longitude"
                                    placeholder=""
                                    onChange={(e) => handleLongChange(e)}
                                />
                            </div>
                        )}
                        <div className="flex justify-center gap-3">
                            <input
                                className="distance rounded-sm text-black p-2 bg-gray-200"
                                type="text"
                                value={distance}
                                onChange={(e) => handleInputChange(e)}
                                id="dist"
                                placeholder="Enter distance in miles"
                            />
                            <button
                                className="text-black bg-blue-300 rounded-sm px-3 font-sans"
                                onClick={startAlgorithm}
                            >
                                ROUTE
                            </button>
                        </div>
                        {error && (
                            <div className="text-center text-red-400">
                                {error}
                            </div>
                        )}
                        <div className="flex text-black text-center w-[280px]">
                            It's simple. Enter the amount of miles you want to
                            run. Get a route with minimal elevation gain. Up to
                            15 miles.
                        </div>
                    </div>
                </div>
            </div>
            {loading && (
                <div className="absolute top-0 right-0 flex items-center justify-center bg-white bg-opacity-50 z-10 w-[50%] h-full">
                    <span className="text-black text-xl"></span>
                    <Image
                        className="opacity-50"
                        src={"/images/loading.gif"}
                        width={200}
                        height={200}
                        alt="Loading..."
                    />
                </div>
            )}
            <Map
                maxDistance={submittedDistance}
                start={startPoint}
                setLoading={setLoading}
                setRouteInfo={setRouteInfo}
            />
            {routeInfo && !loading && (
                <div className="absolute top-0 right-0 flex items-left justify-left px-[17%] py-[8%] z-10 w-[50%]">
                    <RouteInfoBox routeInfo={routeInfo} />
                </div>
            )}
        </div>
    );
}

export default Topo;
