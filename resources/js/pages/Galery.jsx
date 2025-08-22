import React from "react";
import Card from "../components/Ui/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slide1 from "../assets/carousel/slide1.jpeg";
import FadeIn from "../components/Ui/FadeIn";

const galeriData = [
    {
        image: Slide1,
        title: "Upacara Bendera",
        subtitle: "17 Agustus 2025",
        description: "Peringatan Hari Kemerdekaan di Kampus.",
    },
    {
        image: Slide1,
        title: "Seminar Nasional",
        subtitle: "12 Juli 2025",
        description: "Seminar nasional dengan pembicara ahli di bidang hukum.",
    },
    {
        image: Slide1,
        title: "Kegiatan Bakti Sosial",
        subtitle: "5 Juni 2025",
        description: "Mahasiswa melakukan bakti sosial di desa sekitar kampus.",
    },
];

const Galeri = () => {
    return (
        <>
            <Navbar />
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <FadeIn delay={0.2}>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                Galeri{" "}
                                <span className="text-primary">Kampus</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                                Halaman ini memuat moment-moment penting
                                seputaran kampus
                            </p>
                        </FadeIn>
                    </div>

                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galeriData.map((item, index) => (
                                <FadeIn key={index} delay={0.2 + index * 0.2}>
                                    <Card
                                        image={item.image}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        description={item.description}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Galeri;
