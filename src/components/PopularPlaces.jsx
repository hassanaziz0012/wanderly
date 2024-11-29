import React, { useEffect } from "react";
import Container from "./Container";

export default function PopularPlaces() {
    const places = [
        {
            name: "Paris",
            country: "France",
        },
        {
            name: "Bangkok",
            country: "Thailand",
        },
        {
            name: "London",
            country: "United Kingdom",
        },
        {
            name: "Dubai",
            country: "United Arab Emirates",
        },
        {
            name: "Singapore",
            country: "Singapore",
        },
        {
            name: "New York City",
            country: "United States",
        },
        {
            name: "Istanbul",
            country: "Turkey",
        },
        {
            name: "Tokyo",
            country: "Japan",
        },
        {
            name: "Rome",
            country: "Italy",
        },
        {
            name: "Kuala Lumpur",
            country: "Malaysia",
        },
    ];

    return (
        <div className="bg-gray-900 text-white hidden md:block">
                <div className="w-full overflow-hidden whitespace-nowrap md:py-20 group">
                    <div className="inline-block animate-h-scroll group-hover:[animation-play-state:paused]">
                        {places.map((place) => (
                            <div className="inline">
                                <p className="text-2xl font-header italic min-w-44 text-center uppercase inline mx-24 hover:text-primary-400 cursor-pointer duration-300">
                                    {place.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="inline-block animate-h-scroll group-hover:[animation-play-state:paused]">
                        {places.map((place) => (
                            <div className="inline">
                                <p className="text-2xl font-header italic min-w-44 text-center uppercase inline mx-24 hover:text-primary-400 cursor-pointer duration-300">
                                    {place.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
}
