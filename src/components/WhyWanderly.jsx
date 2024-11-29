import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import SectionSubheader from "./SectionSubheader";

export default function WhyWanderly() {
    const benefits = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                >
                    <path d="M360-240h220q17 0 31.5-8.5T632-272l84-196q2-5 3-10t1-10v-32q0-17-11.5-28.5T680-560H496l24-136q2-10-1-19t-10-16l-29-29-184 200q-8 8-12 18t-4 22v200q0 33 23.5 56.5T360-240M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
                </svg>
            ),
            title: "Tailored Recommendations",
            desc: "Trips curated just for you, based on your style and preferences.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                >
                    <path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380t52.5-127.5T620-560t127.5 52.5T800-380q0 27-8 51t-20 45l128 128zM620-280q42 0 71-29t29-71-29-71-71-29-71 29-29 71 29 71 71 29" />
                </svg>
            ),
            title: "Hassle-Free Planning",
            desc: "Spend less time researching and more time exploring.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                >
                    <path d="M280-640q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640zm0-80h400v-80H280zM160-80q-33 0-56.5-23.5T80-160v-40h800v40q0 33-23.5 56.5T800-80zM80-240l139-313q10-22 30-34.5t43-12.5h376q23 0 43 12.5t30 34.5l139 313zm260-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m120 160h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m120 160h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6" />
                </svg>
            ),
            title: "Exclusive Deals",
            desc: "Get access to unique experiences and insider prices.",
        },
        {
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8.069 0c.262 0 .52.017.76.057a4.1 4.1 0 0 1 .697.154c.228.069.451.155.674.263.217.103.44.229.663.366.377.24.748.434 1.126.589a7.537 7.537 0 0 0 2.331.525c.406.029.823.046 1.257.046v4c0 .76-.097 1.48-.291 2.166a8.996 8.996 0 0 1-.789 1.943 10.312 10.312 0 0 1-1.188 1.725 15.091 15.091 0 0 1-1.492 1.532 17.57 17.57 0 0 1-1.703 1.325c-.594.412-1.194.795-1.794 1.143l-.24.143-.24-.143a27.093 27.093 0 0 1-1.806-1.143 15.58 15.58 0 0 1-1.703-1.325 15.082 15.082 0 0 1-1.491-1.532 10.947 10.947 0 0 1-1.194-1.725 9.753 9.753 0 0 1-.789-1.943A7.897 7.897 0 0 1 .571 6V2c.435 0 .852-.017 1.258-.046a8.16 8.16 0 0 0 1.188-.171c.383-.086.766-.2 1.143-.354A6.563 6.563 0 0 0 5.28.846C5.72.56 6.166.349 6.606.21A4.79 4.79 0 0 1 8.069 0zm6.502 2.983a9.566 9.566 0 0 1-2.234-.377 7.96 7.96 0 0 1-2.046-.943A4.263 4.263 0 0 0 9.23 1.16 3.885 3.885 0 0 0 8.074.994a3.99 3.99 0 0 0-1.165.166 3.946 3.946 0 0 0-1.058.503A7.926 7.926 0 0 1 3.8 2.61c-.709.206-1.451.332-2.229.378v3.017c0 .663.086 1.297.258 1.908a8.58 8.58 0 0 0 .72 1.743 9.604 9.604 0 0 0 1.08 1.572c.417.491.862.948 1.342 1.382.48.435.983.835 1.509 1.206.531.372 1.063.709 1.594 1.017a22.397 22.397 0 0 0 1.589-1.017 15.389 15.389 0 0 0 1.514-1.206c.48-.434.926-.891 1.343-1.382a9.596 9.596 0 0 0 1.08-1.572 8.258 8.258 0 0 0 .709-1.743 6.814 6.814 0 0 0 .262-1.908V2.983z" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.797 4.709l-.44-.378-.406.035-4.36 5.148-1.485-2.12-.4-.068-.463.331-.069.4 1.909 2.726.217.12.457.028.234-.102 4.835-5.715-.029-.405z"
                    />
                </svg>
            ),
            title: "Trusted by Thousands",
            desc: "Join a community of 50,000+ adventurers worldwide.",
        },
    ];

    return (
        <div className="py-40 bg-[url('./images/benefits-bg.jpg')] bg-cover relative isolate">
            <Container>
                <SectionHeader>
                    Why <span className="text-primary-600">Wanderly?</span>
                </SectionHeader>
                <SectionSubheader>
                    Your Gateway to Effortless Adventures.
                </SectionSubheader>

                <div className="flex flex-wrap gap-6 mt-10">
                    {benefits.map((b) => (
                        <div className="basis-0 grow min-w-64 p-5 bg-accent-50 shadow-lg rounded-xl lg:p-16">
                            <div className="w-16 h-16 bg-accent-700 rounded-full flex items-center justify-center fill-white mb-6">
                                {b.icon}
                            </div>
                            <p className="font-bold font-header mb-2">
                                {b.title}
                            </p>
                            <p>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-95 -z-10"></div>
        </div>
    );
}
