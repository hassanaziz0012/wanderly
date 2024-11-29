import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function PlaceCard({
    img,
    title,
    location,
    peopleVisited,
    avgBudget,
    reviewCount,
}) {
    return (
        <div className="relative mb-44 min-w-72 max-w-[24rem]">
            <img src={img} alt={title} className="rounded-xl" />

            <div className="absolute -bottom-40 left-0 right-0 bg-white py-3 rounded-xl mx-2 px-5 mb-2 shadow-lg">
                <h3 className="font-bold font-header mb-4 swiper-no-swiping">
                    {title}, {location}
                </h3>

                <div className="flex gap-x-1 items-center text-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-standing"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0" />
                    </svg>
                    <span className="text-primary-900">{peopleVisited}</span>{" "}
                    people visited this year
                </div>

                <div className="flex gap-x-1 items-center text-sm mt-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84z" />
                    </svg>
                    <span className="text-primary-900">{avgBudget}</span> spent
                    on average per user
                </div>

                <div className="border-t mt-2 pt-2 text-sm flex gap-x-1 items-center">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-yellow-500"
                            d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                        />
                    </svg>
                    4.5 <span className="text-gray-600">({reviewCount}+)</span>
                </div>
                <div className="my-2 text-sm">
                    <PrimaryButton onClick={() => console.log("Pressed.")}>
                        Plan trip
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
