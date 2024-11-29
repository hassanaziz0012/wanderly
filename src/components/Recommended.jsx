import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import PrimaryButton from "./PrimaryButton";

export default function Recommended() {
    const recommendations = [
        {
            img: "./images/rec-1.jpg",
            title: "Surfing at Sundak Beach",
            price: 250,
        },
        {
            img: "./images/rec-2.jpg",
            title: "Rafting at Progo",
            price: 125,
        },
        {
            img: "./images/rec-3.jpg",
            title: "Baturaden Bobocabin",
            price: 150,
        },
        {
            img: "./images/rec-4.jpg",
            title: "Dieng Villa View",
            price: 750,
        },
    ]
    return (
        <div className="py-20 bg-background-50">
            <Container>
                <SectionHeader>Recommended for you</SectionHeader>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
                    {recommendations.map((rec, i) => (
                        <div className={`${i === 0 ? "lg:col-span-3" : "lg:col-span-2"} p-5 rounded-xl relative`}>
                            <img src={rec.img} alt={rec.title} className="h-full object-cover rounded-xl" />

                            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-[#00000088] to-[#FFFFFF44] p-5 m-5 text-white rounded-xl flex flex-col justify-end">
                                <SectionHeader>{rec.title}</SectionHeader>
                                <PrimaryButton>Book a trip</PrimaryButton>
                            </div>

                            <div className="absolute top-10 right-10 rounded-full bg-white text-black py-2 px-4 text-sm font-header">
                                $ {rec.price}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
