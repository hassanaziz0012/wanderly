import React from "react";

export default function TestimonialCard({
    img,
    text,
    name,
    caption,
    location,
}) {
    return (
        <div className="p-5 rounded-xl bg-primary-50 shadow flex gap-8 my-6 flex-col md:flex-row items-start">
            <img
                src={img}
                alt=""
                className="min-w-24 w-24 h-24 object-cover rounded-full"
            />

            <div>
                <p className="font-header italic mb-6">{text}</p>

                <p className="text-accent-600 font-bold font-header">{name}</p>
                <p className="text-primary-800">
                    {caption} <span>{location}</span>
                </p>
            </div>
        </div>
    );
}
