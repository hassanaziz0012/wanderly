import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

export default function CTABanner() {
    const bannerImg = "./images/cta-banner-cover.jpg";

    return (
        <div className="bg-primary-500 text-white overflow-hidden">
            <div className="flex">
                <div className="py-20 basis-0 grow">
                    <div className="px-5 md:px-20">
                        <SectionHeader>
                            Ready to get started?
                        </SectionHeader>
                        <p className="mb-4">Join over 40,000+ people using Wanderly to explore the world.</p>
                        <button className="bg-gray-950 py-3 px-6 text-white rounded-xl">
                            Start planning your trip
                        </button>
                        <p className="text-xs md:text-sm">*No credit card required.</p>
                    </div>
                </div>
                <div className="-mx-10 object-cover basis-0 grow hidden md:block">
                    <img src={bannerImg} alt="" className="aspect-square w-full object-cover max-h-96" />
                </div>
            </div>
        </div>
    );
}
