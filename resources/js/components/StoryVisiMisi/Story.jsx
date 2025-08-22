// src/pages/SejarahPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import Slide1 from "../../assets/carousel/slide1.jpeg";

const StoryPage = () => {
    const [history, setHistory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/azlam/profile")
            .then((res) => {
                const data = res.data?.data;
                if (Array.isArray(data) && data.length > 0) {
                    setHistory(data[0].history || "");
                }
            })
            .catch((err) => {
                console.error("Gagal mengambil data history:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="bg-gray-50">
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    {/* Judul */}
                    <div className="text-center mb-12">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            Sejarah{" "}
                            <span className="text-primary">
                                Akademi Keperawatan Justitia
                            </span>
                        </h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            Perjalanan dan tonggak berdirinya Akademi
                            Keperawatan Justitia
                        </p>
                    </div>

                    {/* Konten */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Gambar */}
                        <div>
                            <img
                                src={Slide1}
                                alt="Sejarah Universitas AZLAM"
                                className="w-full h-auto rounded-xl shadow"
                            />
                        </div>

                        {/* Deskripsi */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Awal Berdirinya
                            </h2>
                            {loading ? (
                                <p className="text-gray-500 italic">
                                    Memuat data...
                                </p>
                            ) : (
                                <div
                                    className="text-gray-700 prose prose-sm leading-relaxed text-justify text-sm sm:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: history,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StoryPage;
