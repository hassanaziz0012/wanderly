import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";

export default function Hero() {
    const options = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-open"
                    viewBox="0 0 16 16"
                >
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                </svg>
            ),
            text: "All",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="currentColor"
                    height="24"
                    viewBox="0 -960 960 960"
                >
                    <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440zm640 0H160z" />
                </svg>
            ),
            text: "Hotels",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                >
                    <path d="m414-168 12-56q3-13 12.5-21.5T462-256l124-10q13-2 24 5t16 19l16 38q39-23 70-55.5t52-72.5l-12-6q-11-8-16-19.5t-2-24.5l28-122q3-12 12.5-20t21.5-10q-5-25-12.5-48.5T764-628q-9 5-19.5 4.5T726-630l-106-64q-11-7-16-19t-2-25l8-34q-31-14-63.5-21t-66.5-7q-14 0-29 1.5t-29 4.5l30 68q5 12 2.5 25T442-680l-94 82q-10 9-23.5 10t-24.5-6l-92-56q-23 38-35.5 81.5T160-480q0 16 4 52l88-8q14-2 25.5 4.5T294-412l48 114q5 12 2.5 25T332-252l-38 32q27 20 57.5 33t62.5 19m72-172q-13 2-24-5t-16-19l-54-124q-5-12-1.5-25t13.5-21l102-86q9-9 22-10t24 6l112 66q11 7 17 19t3 25l-32 130q-3 13-12 21.5T618-352zm-6 260q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80" />
                </svg>
            ),
            text: "Things to Do",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                    <path d="m2.1 21.8 6.4-6.3" />
                    <path d="m19 5-7 7" />
                </svg>
            ),
            text: "Restaurants",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-airplane"
                    viewBox="0 0 16 16"
                >
                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                </svg>
            ),
            text: "Flights",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                >
                    <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160zm80-80h80v-80h-80zm0-160h80v-80h-80zm0-160h80v-80h-80zm160 160h80v-80h-80zm0-160h80v-80h-80zm0-160h80v-80h-80zm160 320h80v-80h-80zm0-160h80v-80h-80zm0-160h80v-80h-80zm160 480h80v-80h-80zm0-160h80v-80h-80z" />
                </svg>
            ),
            text: "Rentals",
        },
    ];

    return (
        <div>
            <Container>
                <div className="py-36 text-black flex flex-col items-center gap-10">
                    <h1 className="text-2xl font-header font-bold isolate text-center">
                        Plan Your{" "}
                        <span className="text-white relative before:absolute before:-top-1 before:-left-1 before:-bottom-1 before:-right-1 before:bg-primary-600 before:px-2 before: before:rotate-3 before:-z-10 before:rounded-md">
                            Next Escape
                        </span>{" "}
                        with Just a Click.
                    </h1>

                    <form action="#">
                        <div className="flex flex-wrap justify-center gap-6">
                            {options.map((op) => (
                                <div>
                                    <input
                                        type="radio"
                                        className="hidden peer"
                                        name="option"
                                        id={op.text}
                                        value={op.text}
                                        defaultChecked={op.text === "All"}
                                    />
                                    <label
                                        htmlFor={op.text}
                                        className="flex items-center gap-x-2 peer-checked:border-b peer-checked:border-primary-200 peer-checked:text-primary-600 hover:cursor-pointer"
                                    >
                                        {op.icon}
                                        {op.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="border rounded-full my-6 shadow px-3 py-3 flex justify-between items-center overflow-hidden bg-white">
                            <input
                                type="text"
                                name="place"
                                id="place"
                                className="py-2 px-2 w-full bg-white"
                                placeholder="Search destinations"
                            />
                            <PrimaryButton style={"rounded"}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
                                </svg>
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="absolute bottom-4 left-0 right-0 overflow-hidden hidden sm:block">
                    <div className="animate-airplane">
                        <img src="./images/airplane.png" alt="airplane" className="w-32 h-32" />
                    </div>
                </div>

            </Container>
        </div>
    );
}
