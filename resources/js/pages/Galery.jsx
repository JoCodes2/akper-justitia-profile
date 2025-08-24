import React, { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FadeIn from "../components/Ui/FadeIn";
import GaleriService from "../services/galeriService";

const Galeri = () => {
    const [galeriData, setGaleriData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGaleriData = async () => {
            try {
                const data = await GaleriService.getAllGaleri();
                setGaleriData(data.data); // Sesuaikan dengan struktur data yang diterima
            } catch (err) {
                setError("Gagal memuat data galeri.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGaleriData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
                                        name={item.name}
                                        date_upload={item.date_upload}
                                        created_by={item.user?.name} // Ambil nama user dari data
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
