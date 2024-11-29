import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import SectionHeader from "./SectionHeader";

export default function SpecialOffer() {
    const offerImg = "./images/offer.jpg";

    const offer = {
        title: "Carnival of Wonders",
        description:
            "Experience dazzling performances, vibrant parades, and cultural delights in a festival like no other!",
        location: "Rio de Janeiro, Brazil",
    };

    const locationIcon = (
        <svg
            width="32"
            height="32"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
            />
        </svg>
    );

    return (
        <div className="py-20 bg-white">
            <Container>
                <div className="xs:rounded-xl relative overflow-hidden -mx-6 xs:-mx-0">
                    <img
                        src={offerImg}
                        alt=""
                        className="xs:rounded-xl aspect-video w-full object-cover xs:shadow-md"
                    />

                    <div className="sm:absolute bottom-0 left-0 right-0 top-0 sm:bg-gradient-to-t from-[#00000088] to-[#FFFFFF44] from-25% sm:text-white text-black rounded-xl flex flex-col justify-end items-start p-5 md:p-10 lg:p-20">
                        <SectionHeader className={"xl:text-4xl"}>{offer.title}</SectionHeader>
                        <p className="md:max-w-96 block sm:hidden md:block mb-4">{offer.description}</p>
                        <div className="flex items-center mb-2">
                            {locationIcon} {offer.location}</div>

                        <PrimaryButton>Book your ticket</PrimaryButton>
                    </div>
                </div>
            </Container>
        </div>
    );
}
