// pages/Galeri.jsx
import React, { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FadeIn from "../components/Ui/FadeIn";
import Modal from "../components/Ui/Modal"; // pakai modal reusable Anda
import { apiGet } from "../admin/helper/api";

const Galeri = () => {
    const [galeriData, setGaleriData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);

    const itemsPerPage = 6;

    // klik detail
    const handleDetailClick = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    const closeDetailModal = () => {
        setShowDetailModal(false);
        setSelectedItem(null);
    };

    // fetch API
    useEffect(() => {
        const fetchGaleriData = async () => {
            try {
                const res = await apiGet(`${appUrl}/justitia/galeri`);
                setGaleriData(res.data.data);
                setTotalPages(Math.ceil(res.data.data.length / itemsPerPage));
            } catch (err) {
                setError("Gagal memuat data galeri.");
            } finally {
                setLoading(false);
            }
        };

        fetchGaleriData();
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error)
        return <div className="text-center py-10 text-red-600">{error}</div>;

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galeriData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {/* Modal Detail pakai reusable Modal */}
            {showDetailModal && (
                <Modal
                    isOpen={showDetailModal}
                    onClose={closeDetailModal}
                    title={selectedItem?.name}
                >
                    <div className="space-y-3 mb-6">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Tanggal:</span>{" "}
                            {formatDate(selectedItem?.date_upload)}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">
                                Diupload oleh:
                            </span>{" "}
                            {selectedItem?.user?.name || "Tidak diketahui"}
                        </p>
                    </div>
                    {selectedItem?.image && (
                        <div className="mb-6">
                            <img
                                src={`${appUrl}/uploads/galeri/${selectedItem.image}`}
                                alt={selectedItem.name}
                                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    )}
                </Modal>
            )}

            <Navbar />
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <FadeIn delay={0.2}>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                Galeri{" "}
                                <span className="text-primary">Kampus</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                                Halaman ini memuat momen-momen penting seputaran
                                kampus
                            </p>
                        </FadeIn>
                    </div>

                    {/* Grid galeri */}
                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentItems.map((item, index) => (
                                <FadeIn key={index} delay={0.2 + index * 0.2}>
                                    <Card
                                        image={item.image}
                                        name={item.name}
                                        date_upload={formatDate(
                                            item.date_upload
                                        )}
                                        created_by={item.user?.name}
                                        onDetailClick={() =>
                                            handleDetailClick(item)
                                        }
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-l disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded-r disabled:opacity-50"
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
