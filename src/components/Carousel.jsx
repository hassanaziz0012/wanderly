import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel({ items, renderItem }) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }}
            slidesPerGroup={1}
            loop
            navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            observeParents
            className="isolate hover:cursor-grab"
        >
            {items.map((i) => (
                <SwiperSlide className="h-auto mb-10">{renderItem(i)}</SwiperSlide>
            ))}

            <div className="absolute bottom-0 right-0 z-10 flex gap-x-4">
                <button className="prev-btn w-12 h-12 bg-accent-600 text-white rounded-full p-5 fill-white flex items-center justify-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 -960 960 960"
                        >
                            <path d="M560-240 320-480l240-240 56 56-184 184 184 184z" />
                        </svg>
                    </div>
                </button>
                <button className="next-btn w-12 h-12 bg-accent-600 text-white rounded-full p-5 fill-white flex items-center justify-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 -960 960 960"
                        >
                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56z" />
                        </svg>
                    </div>
                </button>
            </div>
        </Swiper>
    );
}
