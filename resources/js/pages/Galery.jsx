import React, { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FadeIn from "../components/Ui/FadeIn";
import GaleriService from "../services/galeriService";

const Galeri = () => {
    const [galeriData, setGaleriData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // 2 rows * 3 columns
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGaleriData = async () => {
            try {
                const data = await GaleriService.getAllGaleri();
                setGaleriData(data.data);
                setTotalPages(Math.ceil(data.data.length / itemsPerPage)); // Update total pages here
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

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galeriData.slice(indexOfFirstItem, indexOfLastItem);

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
                            {currentItems.map((item, index) => (
                                <FadeIn key={index} delay={0.2 + index * 0.2}>
                                    <Card
                                        image={item.image}
                                        name={item.name}
                                        date_upload={item.date_upload}
                                        created_by={item.user?.name}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-l"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded-r"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Galeri;
