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
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const itemsPerPage = 6; // 2 rows * 3 columns
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);

    const handleDetailClick = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    const closeDetailModal = () => {
        setShowDetailModal(false);
        setSelectedItem(null);
    };

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

    // Format tanggal
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galeriData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {/* Modal Detail */}
            {showDetailModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDetailModal}></div>
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-4 z-50">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedItem?.name}</h2>
                        <div className="space-y-3 mb-6">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Tanggal:</span> {formatDate(selectedItem?.date_upload)}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Diupload oleh:</span> {selectedItem?.user?.name || 'Tidak diketahui'}
                            </p>
                        </div>
                        {selectedItem?.image && (
                            <div className="mb-6">
                                <img
                                    src={`${import.meta.env.VITE_APP_URL || 'http://localhost:8000'}/uploads/galeri/${selectedItem.image}`}
                                    alt={selectedItem.name}
                                    className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        <button
                            onClick={closeDetailModal}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
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
                                        onDetailClick={() => handleDetailClick(item)}
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
