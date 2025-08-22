// pages/StoryVisiMisi.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoryPage from "../components/StoryVisiMisi/Story.jsx";
import VisiMisi from "../components/StoryVisiMisi/VisiMisi.jsx";
import FadeIn from "../components/Ui/FadeIn.jsx";
import VisiMisi2 from "../components/StoryVisiMisi/VisiMisi2.jsx";

const StoryVisiMisi = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Section 1 */}
            <FadeIn delay={0.2}>
                <StoryPage />
            </FadeIn>

            {/* Section 2 */}
            <FadeIn delay={0.4}>
                <VisiMisi />
            </FadeIn>
            <FadeIn delay={0.4}>
                <VisiMisi2 />
            </FadeIn>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default StoryVisiMisi;
