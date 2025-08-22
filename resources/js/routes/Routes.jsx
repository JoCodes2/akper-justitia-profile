import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import StoryVisiMisi from "../pages/StoryVisiMisi.jsx";
import Leader from "../pages/Leader.jsx";
import Galeri from "../pages/Galery.jsx";
import News from "../pages/News.jsx";
import Contact from "../pages/Contact.jsx";
import ProgramStudyPage from "../pages/ProgramStudiPage.jsx";
import Fasility from "../pages/Fasility.jsx";

export default function RoutesTemplate() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profil/sejarah-visi-misi"
                    element={<StoryVisiMisi />}
                />
                <Route
                    path="/profil/struktur-organisasi"
                    element={<Leader />}
                />
                <Route path="/fasilitas" element={<Fasility />} />
                <Route path="/program-studi" element={<ProgramStudyPage />} />
                <Route path="/galeri" element={<Galeri />} />
                <Route path="/berita" element={<News />} />
                <Route path="/kontak" element={<Contact />} />
                {/* Tambahkan route lain nanti */}
            </Routes>
        </>
    );
}
