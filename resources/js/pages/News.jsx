import React, { useState } from "react";
import { Calendar, User } from "lucide-react";
import Modal from "../components/Ui/Modal.jsx";
import news1 from "../assets/carousel/slide1.jpeg";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FadeIn from "../components/Ui/FadeIn.jsx";

const News = () => {
    const dummyNews = [
        {
            title: "Universitas AZLAM Buka Program Magang MBKM untuk Mahasiswa",
            image: news1,
            date: "25 Juli 2025",
            author: "Admin Kampus",
            slug: "magang-mbkm-azlam",
            category: "Berita",
            excerpt:
                "Program magang MBKM memberikan pengalaman langsung kepada mahasiswa...",
            description: `Program magang MBKM memberikan pengalaman langsung kepada mahasiswa untuk mengembangkan potensi dan kompetensi di dunia kerja nyata.

Kegiatan ini merupakan implementasi dari kebijakan Merdeka Belajar Kampus Merdeka (MBKM) yang bertujuan agar mahasiswa siap terjun di dunia industri dengan pengalaman yang relevan.`,
        },
        {
            title: "Pengumuman Libur Kuliah Semester Ganjil 2025",
            image: news1,
            date: "20 Juli 2025",
            author: "Biro Akademik",
            slug: "pengumuman-libur-kuliah",
            category: "Pengumuman",
            excerpt:
                "Sehubungan dengan libur semester ganjil, seluruh kegiatan perkuliahan akan dihentikan sementara...",
            description: `Sehubungan dengan libur semester ganjil, seluruh kegiatan perkuliahan akan dihentikan sementara mulai 25 Juli hingga 1 Agustus 2025.

Diharapkan mahasiswa memanfaatkan waktu ini untuk istirahat dan mempersiapkan diri menghadapi semester baru.`,
        },
        {
            title: "Seminar Nasional Teknologi Pangan",
            image: news1,
            date: "18 Juli 2025",
            author: "Humas Kampus",
            slug: "seminar-nasional-teknologi-pangan",
            category: "Event",
            excerpt:
                "Seminar Nasional ini menghadirkan pembicara dari berbagai universitas dan industri...",
            description: `Seminar Nasional Teknologi Pangan diadakan di Aula Universitas AZLAM dengan tema "Inovasi Pangan untuk Masa Depan".

Acara ini dihadiri oleh mahasiswa, dosen, dan praktisi industri dari seluruh Indonesia.`,
        },
    ];

    const categories = ["Semua", "Pengumuman", "Event", "Berita"];

    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (news) => setSelectedNews(news);
    const closeModal = () => setSelectedNews(null);

    const filteredNews =
        selectedCategory === "Semua"
            ? dummyNews
            : dummyNews.filter((news) => news.category === selectedCategory);

    return (
        <>
            <Navbar />
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <FadeIn delay={0.2}>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Berita{" "}
                                <span className="text-primary">Terbaru</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                                Ikuti perkembangan terbaru seputar Universitas
                                Abdul Aziz Lamadjido.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Filter Navbar */}
                    <FadeIn delay={0.4}>
                        <div className="flex justify-center gap-4 mb-10 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === cat
                                            ? "bg-primary text-white"
                                            : "bg-white text-gray-700 border hover:bg-gray-100"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Cards */}
                    <FadeIn delay={0.6}>
                        {filteredNews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {filteredNews.map((news, index) => (
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
                        ) : (
                            <p className="text-center text-gray-500">
                                Tidak ada berita pada kategori ini.
                            </p>
                        )}
                    </FadeIn>
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
            <Footer />
        </>
    );
};

export default News;
