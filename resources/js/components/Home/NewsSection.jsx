import React, { useEffect, useState } from "react";
import { Calendar, User } from "lucide-react";
import Modal from "../Ui/Modal.jsx";
import Button from "../Ui/Button.jsx";
import { Link } from "react-router-dom";
import { apiGet } from "../../admin/helper/api.js";

const NewsSection = () => {
    const [newsList, setNewsList] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    const baseUrl = "/uploads/news/";

    // helper kategori warna
    const getCategoryColor = (category) => {
        switch (category) {
            case "news":
                return "bg-blue-100 text-blue-600";
            case "event":
                return "bg-green-100 text-green-600";
            case "announcement":
                return "bg-yellow-100 text-yellow-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await apiGet(`${appUrl}/justitia/news`);

                if (res.data.code === 200) {
                    const latestNews = res.data.data
                        .sort(
                            (a, b) =>
                                new Date(b.date_upload) -
                                new Date(a.date_upload)
                        )
                        .slice(0, 3);
                    setNewsList(latestNews);
                }
            } catch (err) {
                console.error("Gagal mengambil berita:", err);
            }
        };
        fetchNews();
    }, []);

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
                        Ikuti perkembangan terbaru seputar Akademi Keperawatan
                        Justitia
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsList.map((news) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={`${baseUrl}/${news.image}`}
                                    alt={news.title}
                                    className="w-full h-48 object-scale-down bg-gray-100"
                                />
                                <span
                                    className={`absolute top-2 right-2 px-3 py-1 rounded-md text-sm font-medium shadow ${getCategoryColor(
                                        news.category
                                    )}`}
                                >
                                    {news.category === "news"
                                        ? "Berita"
                                        : news.category === "event"
                                        ? "Event"
                                        : "Pengumuman"}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center text-sm text-gray-500 mb-2 gap-3">
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1.5" />
                                        {news.date_upload}
                                    </span>
                                    <span className="flex items-center">
                                        <User className="w-4 h-4 mr-1.5" />
                                        {news.user.name}
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {news.description
                                        .replace(/<[^>]+>/g, "")
                                        .slice(0, 80)}
                                    ...
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
    );
};

export default NewsSection;
