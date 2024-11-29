import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import SectionSubheader from "./SectionSubheader";
import Carousel from "./Carousel";

export default function Blog() {
    const posts = [
        {
            img: "./images/post-1.jpg",
            title: "5 Hidden Beaches to Escape the Crowds",
            description:
                "Discover secluded and serene beaches around the world where you can truly unwind.",
            tags: ["beaches", "relaxation", "hidden gems"],
        },
        {
            img: "./images/post-2.jpg",
            title: "48 Hours in Tokyo: A Quick Guide",
            description:
                "Maximize a short trip to Tokyo with this two-day itinerary packed with must-see spots.",
            tags: ["city guide", "Tokyo", "itinerary"],
        },
        {
            img: "./images/post-3.jpg",
            title: "The Ultimate Packing List for Any Trip",
            description:
                "Never forget an essential item again with this comprehensive travel packing guide.",
            tags: ["travel tips", "packing", "essentials"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Europe’s Best Christmas Markets",
            description:
                "Explore the magic of Europe’s top holiday markets filled with festive cheer and unique gifts.",
            tags: ["holiday travel", "Europe", "Christmas markets"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Solo Travel: Why You Should Try It at Least Once",
            description:
                "A guide to the joys and challenges of traveling alone, with tips to make it unforgettable.",
            tags: ["solo travel", "travel tips", "self-discovery"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Affordable Adventures: Budget Travel Tips",
            description:
                "Learn how to travel more while spending less with these savvy budget hacks.",
            tags: ["budget travel", "adventure", "saving money"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Top 10 National Parks in the U.S.",
            description:
                "Immerse yourself in nature by visiting these breathtaking national parks across the United States.",
            tags: ["nature", "national parks", "USA"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Street Food Delights Around the World",
            description:
                "Embark on a culinary adventure with these must-try street foods from different countries.",
            tags: ["food", "culture", "street food"],
        },
        {
            img: "./images/post-4.jpg",
            title: "How to Beat Jet Lag Like a Pro",
            description:
                "Tips and tricks to adjust to new time zones quickly and make the most of your trip.",
            tags: ["travel tips", "jet lag", "wellness"],
        },
        {
            img: "./images/post-4.jpg",
            title: "Unforgettable Train Journeys You Need to Experience",
            description:
                "Ride through stunning landscapes and charming towns with these iconic train journeys.",
            tags: ["train travel", "scenic routes", "adventure"],
        },
    ];

    return (
        <div className="bg-background-50 py-20">
            <Container>
                <SectionHeader>Our Personal Favorites</SectionHeader>
                <SectionSubheader>Handpicked by our team</SectionSubheader>

                <Carousel
                    items={posts}
                    renderItem={(p) => (
                        <div className="shadow-lg rounded-xl overflow-hidden min-w-72 mb-6 cursor-default bg-white flex flex-col">
                            <div className="basis-0 grow">
                                <img src={p.img} alt={p.title} className="" />
                            </div>
                            <div className="p-5 basis-0 grow">
                                <h4 className="font-bold font-header mb-4">
                                    {p.title}
                                </h4>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    )}
                />
            </Container>
        </div>
    );
}
