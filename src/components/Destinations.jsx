import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import SectionHeader from "./SectionHeader";
import SectionSubheader from "./SectionSubheader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlaceCard from "./PlaceCard";
import Carousel from "./Carousel";

export default function Destinations() {
    const destinations = [
        {
            img: "./images/dest-1.jpg",
            title: "Santorini",
            location: "Greece",
            peopleVisited: 28500,
            avgBudget: 1500,
            reviewCount: 4120,
        },
        {
            img: "./images/dest-2.jpg",
            title: "Kyoto",
            location: "Japan",
            peopleVisited: 17300,
            avgBudget: 1800,
            reviewCount: 2890,
        },
        {
            img: "./images/dest-3.jpg",
            title: "Banff National Park",
            location: "Canada",
            peopleVisited: 24200,
            avgBudget: 1200,
            reviewCount: 3500,
        },
        {
            img: "./images/dest-4.jpg",
            title: "Maui",
            location: "Hawaii, USA",
            peopleVisited: 41000,
            avgBudget: 2200,
            reviewCount: 5200,
        },
        {
            img: "./images/dest-5.jpg",
            title: "Cape Town",
            location: "South Africa",
            peopleVisited: 15700,
            avgBudget: 1700,
            reviewCount: 2740,
        },
        {
            img: "./images/dest-6.jpg",
            title: "Paris",
            location: "France",
            peopleVisited: 68000,
            avgBudget: 2500,
            reviewCount: 8700,
        },
        {
            img: "./images/dest-7.jpg",
            title: "Queenstown",
            location: "New Zealand",
            peopleVisited: 19300,
            avgBudget: 2000,
            reviewCount: 3100,
        },
    ];

    return (
        <div className="py-20">
            <Container>
                <SectionHeader>Top Destinations This Week</SectionHeader>
                <SectionSubheader>Curated by our team</SectionSubheader>

                <Carousel items={destinations} renderItem={(dest) => <PlaceCard {...dest} />} />
                
                <div className="w-full text-center">
                    <a href="#" className="text-primary-700 underline">
                        See more
                    </a>
                </div>
            </Container>
        </div>
    );
}
