import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/Home/HeroCarousel";
import WelcomeSection from "../components/Home/WelcomeSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import NewsSection from "../components/Home/NewsSection";
import Footer from "../components/Footer";
import FadeIn from "../components/Ui/FadeIn";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <FadeIn delay={0.2}>
                <HeroCarousel />
            </FadeIn>

            {/* Welcome Section */}
            <FadeIn delay={0.4}>
                <WelcomeSection />
            </FadeIn>

            {/* Why Choose Us */}
            <FadeIn delay={0.6}>
                <WhyChooseUs />
            </FadeIn>

            {/* News Section */}
            <FadeIn delay={0.8}>
                <NewsSection />
            </FadeIn>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
