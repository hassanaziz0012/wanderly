import React from "react";
import Container from "./Container";
import FooterSocialIcons from "./FooterSocialIcons";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <a
                            href="#"
                            className="tracking-widest font-header"
                        >
                            Wanderlust
                        </a>
                        <p className="text-primary-200 mt-6">
                            Start planning your trip today. We take care of
                            everything.
                        </p>
                        <div className="mt-6">
                            <FooterSocialIcons />
                        </div>
                    </div>

                    <div>
                        <p className="font-header mb-6">Useful Links</p>

                        <div className="flex flex-col gap-y-2 ">
                            <a href="#">About Us</a>
                            <a href="#">Services</a>
                            <a href="#">Trip Planning</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-header mb-6">Legal</p>

                        <div className="flex flex-col gap-y-2 ">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Legal Inquiries</a>
                        </div>

                    </div>
                </div>

                <hr className="my-6" />

                <div className="text-center">
                    <p>Copyright Wanderly, All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    );
}
