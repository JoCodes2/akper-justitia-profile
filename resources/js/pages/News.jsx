import React, { useState, useEffect } from "react";
import { Calendar, User } from "lucide-react";
import Modal from "../components/Ui/Modal.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FadeIn from "../components/Ui/FadeIn.jsx";
import { apiGet } from "../admin/helper/api.js";

const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [selectedNews, setSelectedNews] = useState(null);

    const categories = ["Semua", "Pengumuman", "Event", "Berita"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiGet(`${appUrl}/justitia/news`);
                if (res?.data?.data) {
                    const mapped = res.data.data.map((item) => ({
                        id: item.id,
                        title: item.title,
                        image: `/uploads/news/${item.image}`,
                        dateObj: new Date(item.date_upload),
                        date: new Date(item.date_upload).toLocaleDateString(
                            "id-ID",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }
                        ),
                        author: item.created_by ?? "Admin Kampus",
                        category:
                            item.category === "news"
                                ? "Berita"
                                : item.category === "event"
                                ? "Event"
                                : "Pengumuman",
                        excerpt:
                            item.description
                                .replace(/<[^>]+>/g, "")
                                .slice(0, 80) + "...",
                        description: item.description,
                    }));

                    // urutkan berdasarkan tanggal terbaru
                    const sorted = mapped.sort((a, b) => b.dateObj - a.dateObj);

                    setNewsList(sorted);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredNews =
        selectedCategory === "Semua"
            ? newsList
            : newsList.filter((news) => news.category === selectedCategory);

    const openModal = (news) => setSelectedNews(news);
    const closeModal = () => setSelectedNews(null);

    const getCategoryColor = (category) => {
        switch (category) {
            case "Berita":
                return "bg-blue-100 text-blue-600";
            case "Event":
                return "bg-green-100 text-green-600";
            case "Pengumuman":
                return "bg-yellow-100 text-yellow-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <>
            <Navbar />
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <FadeIn delay={0.2}>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Berita{" "}
                                <span className="text-primary">Terbaru</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                                Ikuti perkembangan terbaru seputar Akademi
                                Keperawatan Justitia
                            </p>
                        </div>
                    </FadeIn>

                    {/* Filter Kategori */}
                    <FadeIn delay={0.3}>
                        <div className="flex justify-center gap-3 mb-12 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                                        selectedCategory === cat
                                            ? "bg-primary text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Grid Berita */}
                    <FadeIn delay={0.3}>
                        {loading ? (
                            <p className="text-center text-gray-500">
                                Memuat berita...
                            </p>
                        ) : filteredNews.length === 0 ? (
                            <p className="text-center text-gray-500">
                                Tidak ada berita dalam kategori ini.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {filteredNews.map((news) => (
                                    <div
                                        key={news.id}
                                        className="bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden relative"
                                    >
                                        {/* Gambar dengan badge kategori */}
                                        <div className="relative">
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-60 object-contain bg-gray-100"
                                            />
                                            <span
                                                className={`absolute top-2 right-2 px-3 py-1 rounded-md text-sm font-medium shadow ${getCategoryColor(
                                                    news.category
                                                )}`}
                                            >
                                                {news.category}
                                            </span>
                                        </div>

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
                                className="w-full h-60 object-contain bg-gray-100"
                            />
                            <div className="text-gray-500 text-sm flex flex-wrap gap-4">
                                <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1.5" />
                                    {selectedNews.date}
                                </span>
                                <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                                        selectedNews.category
                                    )}`}
                                >
                                    {selectedNews.category}
                                </span>
                                <span className="flex items-center">
                                    <User className="w-4 h-4 mr-1.5" />
                                    {selectedNews.author}
                                </span>
                            </div>
                            <div
                                className="prose prose-sm sm:prose-base text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: selectedNews.description,
                                }}
                            />
                        </div>
                    )}
                </Modal>
            </section>
            <Footer />
        </>
    );
};

export default News;
