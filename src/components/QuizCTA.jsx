import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import SectionHeader from "./SectionHeader";
import TextInputWithIcon from "./TextInputWithIcon";
import SectionSubheader from "./SectionSubheader";

export default function QuizCTA() {
    const dateIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-calendar3"
            viewBox="0 0 16 16"
        >
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
    );
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
    const durationIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-moon-stars"
            viewBox="0 0 16 16"
        >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
    );
    const roomsIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 -960 960 960"
        >
            <path d="M200-280h60v-60h440v60h60v-154q0-21-8-39.5T730-506v-94q0-33-23.5-56.5T650-680H520q-11 0-21 3t-19 9q-9-6-19-9t-21-3H310q-33 0-56.5 23.5T230-600v94q-14 14-22 32.5t-8 39.5zm60-120v-40q0-17 11.5-28.5T300-480h360q17 0 28.5 11.5T700-440v40zm30-140v-80h160v80zm220 0v-80h160v80zM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80zm0-80h640v-640H160zm0 0v-640z" />
        </svg>
    );

    return (
        <div className="bg-primary-50 py-20 relative isolate overflow-hidden">
            <Container>
                <div className="flex flex-col items-center gap-y-12">
                    <div className="flex flex-col md:flex-row shadow-xl max-w-[84rem]">
                        <div className="p-5 bg-white rounded-xl md:rounded-e-none basis-0 grow flex flex-col justify-between">
                            <div>
                                <SectionHeader>
                                    Plan your next trip, using our planner.
                                </SectionHeader>
                                <SectionSubheader>
                                    Find your next dream vacation.
                                </SectionSubheader>
                            </div>

                            <div>
                                <form action="#">
                                    <TextInputWithIcon
                                        icon={locationIcon}
                                        label={"City or place"}
                                        fieldName={"location"}
                                        placeholder={"Marriot Hotel, NYC"}
                                    />
                                    <TextInputWithIcon
                                        icon={dateIcon}
                                        label={"Check in"}
                                        fieldName={"date"}
                                        placeholder={"Wed, 11/07/2024"}
                                    />
                                    <TextInputWithIcon
                                        icon={durationIcon}
                                        label={"Duration"}
                                        fieldName={"duration"}
                                        placeholder={"2 nights"}
                                    />
                                    <TextInputWithIcon
                                        icon={roomsIcon}
                                        label={"Guests and Rooms"}
                                        fieldName={"guestsRooms"}
                                        placeholder={"3 guests, 2 rooms"}
                                    />
                                </form>
                            </div>

                            <div className="mt-2">
                                <PrimaryButton>Plan your trip</PrimaryButton>
                            </div>
                        </div>

                        <div className="bg-accent-50 p-5 rounded-xl md:rounded-s-none basis-0 grow  md:flex flex-col justify-between">
                            <ul className="list-disc p-5 md:flex flex-col gap-y-4 hidden">
                                <li className="[&::marker]:text-primary-600">
                                    Fill out a couple quick questions.
                                </li>
                                <li className="[&::marker]:text-primary-600">
                                    Tell us about your dream destinations.
                                </li>
                                <li className="[&::marker]:text-primary-600">
                                    Get a personalized travel plan in just 2
                                    mins.
                                </li>
                            </ul>
                            <div className="flex flex-col gap-y-6">
                                <div className="bg-white p-5 rounded-xl shadow flex flex-col justify-between gap-y-6">
                                    <p className="italic">
                                        “This quiz nailed my style—I’m already
                                        packing!”
                                    </p>

                                    <div>
                                        <p className="font-bold">
                                            Anastasia D.
                                        </p>
                                        <p className="text-sm text-gray-800">
                                            Travelled across Bali using Wanderly
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow flex-col justify-between gap-y-6 flex">
                                    <p className="italic">
                                        “I discovered places I’d never thought
                                        of visiting!”
                                    </p>

                                    <div>
                                        <p className="font-bold">
                                            Samantha S.
                                        </p>
                                        <p className="text-sm text-gray-800">
                                            Travelled across Bali using Wanderly
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-z-10 absolute -top-16 -left-16 md:-top-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent-200"></div>
                <div className="-z-10 absolute -bottom-16 -right-16 md:-bottom-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent-200"></div>
            </Container>
        </div>
    );
}
