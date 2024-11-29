import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import CTABanner from "./components/CTABanner";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Palette from "./components/Palette";
import PopularPlaces from "./components/PopularPlaces";
import QuizCTA from "./components/QuizCTA";
import Recommended from "./components/Recommended";
import SpecialOffer from "./components/SpecialOffer";
import TestimonialBanner from "./components/TestimonialBanner";
import WhyWanderly from "./components/WhyWanderly";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <div className="bg-[url('./images/hero.jpg')] bg-cover pt-2 relative isolate bg-center md:bg-top">
                <Navbar />
                <Hero />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-25 -z-10"></div>
            </div>
            <PopularPlaces />
            <QuizCTA />
            <Destinations />
            <Recommended />
            <SpecialOffer />
            <Blog />
            <WhyWanderly />
            <TestimonialBanner />
            <CaseStudies />
            <CTABanner />
            <Footer />
        </div>
    );
}

export default App;
