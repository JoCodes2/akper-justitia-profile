import React, { useState } from "react";
import { Calendar, User } from "lucide-react";
import Modal from "../Ui/Modal.jsx";
import news1 from "../../assets/carousel/slide1.jpeg";
import Button from "../Ui/Button.jsx";
import { Link } from "react-router-dom";
const NewsSection = () => {
    const dummyNews = [
        {
            title: "Universitas AZLAM Buka Program Magang MBKM untuk Mahasiswa",
            image: news1,
            date: "25 Juli 2025",
            author: "Admin Kampus",
            slug: "magang-mbkm-azlam",
            excerpt:
                "Program magang MBKM memberikan pengalaman langsung kepada mahasiswa...",
            description: `Program magang MBKM memberikan pengalaman langsung kepada mahasiswa untuk mengembangkan potensi dan kompetensi di dunia kerja nyata.

Kegiatan ini merupakan implementasi dari kebijakan Merdeka Belajar Kampus Merdeka (MBKM) yang bertujuan agar mahasiswa siap terjun di dunia industri dengan pengalaman yang relevan.`,
        },
        // ... berita lainnya
    ];

    const [selectedNews, setSelectedNews] = useState(null);
    const openModal = (news) => setSelectedNews(news);
    const closeModal = () => setSelectedNews(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Berita <span className="text-primary">Terbaru</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Ikuti perkembangan terbaru seputar Universitas Abdul
                        Aziz Lamadjido.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dummyNews.map((news, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden"
                        >
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <div className="flex items-center text-sm text-gray-500 mb-2 gap-3">
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1.5" />
                                        {news.date}
                                    </span>
                                    <span className="flex items-center">
                                        <User className="w-4 h-4 mr-1.5" />
                                        {news.author}
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <button
                                    onClick={() => openModal(news)}
                                    className="text-sm text-primary font-medium hover:underline"
                                >
                                    Baca selengkapnya →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Link to="/berita">
                        <Button size="md" variant="default">
                            Lihat Semua Berita
                        </Button>
                    </Link>
                </div>
            </div>

            {/* MODAL */}
            <Modal
                isOpen={!!selectedNews}
                onClose={closeModal}
                title={selectedNews?.title}
            >
                {selectedNews && (
                    <div className="space-y-4">
                        <img
                            src={selectedNews.image}
                            alt={selectedNews.title}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="text-gray-500 text-sm flex flex-wrap gap-4">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1.5" />
                                {selectedNews.date}
                            </span>
                            <span className="flex items-center">
                                <User className="w-4 h-4 mr-1.5" />
                                {selectedNews.author}
                            </span>
                            <span className="flex items-center">
                                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                    {selectedNews.slug}
                                </code>
                            </span>
                        </div>
                        <div className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                            {selectedNews.description}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default NewsSection;
