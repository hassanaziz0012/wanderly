import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import SectionHeader from "./SectionHeader";
import SectionSubheader from "./SectionSubheader";
import TestimonialCard from "./TestimonialCard";

export default function CaseStudies() {
    const studies = [
        {
            img: "./images/study-1.jpg",
            testimonial: {
                img: "./images/testimonial-2.jpg",
                text: "I’ve always struggled to plan trips that fit my budget and preferences. Wanderly changed everything! Their recommendations were spot on, and the whole process was seamless.",
                name: "Jason M.",
                caption: "Family traveler and cultural explorer",
                location: "Austin, Texas",
            },
            title: "From City Stress to Beach Bliss",
            description:
                "A busy marketing manager used Wanderly to plan a quick escape to Tulum. With just a few clicks, she found an affordable beachfront villa and activities tailored to her love for yoga and snorkeling.",
            tags: ["beach", "wellness", "short trips"],
        },
        // {
        //     img: "./images/study-2.jpg",
        //     testimonial: {
        //         img: "./images/testimonial-3.jpg",
        //         text: "Thanks to Wanderly, my partner and I had the perfect romantic getaway in Paris. The personalized itinerary was flawless—hidden cafes, charming streets, and a magical sunset cruise. It was everything we dreamed of and more. Highly recommend!",
        //         name: "William G.",
        //         caption: "Couples traveler and romance enthusiast",
        //         location: "Melbourne, Australia",
        //     },
        //     title: "Discovering Hidden Gems in Japan",
        //     description:
        //         "A solo traveler wanted an off-the-beaten-path experience in Japan. Wanderly suggested a journey through lesser-known villages in the Japanese Alps, complete with hot springs and local culinary tours.",
        //     tags: ["solo travel", "Japan", "culture"],
        // },
        // {
        //     img: "./images/study-3.jpg",
        //     testimonial: {
        //         img: "./images/testimonial-4.jpg",
        //         text: "Wanderly is a game changer! It took the guesswork out of planning, and I discovered incredible places I’d never heard of. My adventure in Iceland—glaciers, geysers, and the Northern Lights—was absolutely breathtaking. I can't wait to plan my next trip!",
        //         name: "Emily R.",
        //         caption: "Nature lover and adventure seeker",
        //         location: "Seattle, USA",
        //     },
        //     title: "Family Fun in the Rockies",
        //     description:
        //         "A family of four used Wanderly to plan a budget-friendly trip to Banff National Park. Their personalized itinerary included easy hiking trails, cozy lodges, and wildlife viewing for the kids.",
        //     tags: ["family travel", "nature", "budget-friendly"],
        // },
    ];

    return (
        <div className="py-20 bg-white">
            <Container>
                <SectionSubheader>Case Studies</SectionSubheader>
                <SectionHeader>See how Wanderly serves its users</SectionHeader>

                <div>
                    {studies.map((s) => (
                        <div className="bg-accent-50 flex flex-col lg:flex-row rounded-xl shadow-xl my-32 xs:ml-16">
                            <div className="w-full basis-0 grow xs:shadow-xl xs:relative xs:-mb-16 lg:-mb-0 -top-16 -left-16">
                                <div className="overflow-hidden rounded-t-xl xs:rounded-xl h-full">
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        className="object-cover h-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 p-5 basis-0 grow flex flex-col justify-between">
                                <div>
                                    <h4 className="font-header font-bold mb-6">
                                        {s.title}
                                    </h4>
                                    <p className="mb-4">{s.description}</p>

                                    <TestimonialCard {...s.testimonial} />
                                </div>
                                <PrimaryButton>
                                    Read full case study
                                </PrimaryButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
