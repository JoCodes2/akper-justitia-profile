import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StrukturOrganisasi from "../components/Struktur/Struktur.jsx";
import LeaderPage from "../components/Struktur/LeaderPage.jsx";
import FadeIn from "../components/Ui/FadeIn.jsx";

const Leader = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Struktur Organisasi */}
            <FadeIn delay={0.2}>
                <StrukturOrganisasi />
            </FadeIn>

            {/* Leader Page */}
            <FadeIn delay={0.4}>
                <LeaderPage />
            </FadeIn>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Leader;
