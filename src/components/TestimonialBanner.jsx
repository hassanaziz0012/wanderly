import React from "react";
import Container from "./Container";

export default function TestimonialBanner() {
    const testimonial = {
        img: "./images/testimonial.jpg",
        name: "Sarah T.",
        text: "Wanderly transformed the way I travel! The personalized quiz nailed my dream destination, and the planning process was a breeze. I found hidden gems I never would’ve discovered on my own. Thanks to Wanderly, my trip to Bali was unforgettable!",
        caption: "Avid solo traveler and foodie",
        location: "San Francisco, USA",
    };

    return (
        <div className="bg-background-50 py-20 p-5">
            <Container>
                <div className="flex gap-12 flex-col sm:flex-row">
                    <img
                        src={testimonial.img}
                        alt=""
                        className="w-40 h-40 object-cover rounded-full"
                    />
                    <div>
                        <p className="text-xl font-header italic mb-6">
                            {testimonial.text}
                        </p>

                        <p className="text-accent-600 font-bold font-header">
                            {testimonial.name}
                        </p>
                        <p className="text-background-800">
                            {testimonial.caption},{" "}
                            <span>{testimonial.location}</span>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
