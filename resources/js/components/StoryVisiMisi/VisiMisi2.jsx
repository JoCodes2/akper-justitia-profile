import { useEffect, useState } from "react";
import axios from "axios";

const VisiMisi2 = () => {
    const [vision, setVision] = useState("");
    const [mission, setMission] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/justitia/profile")
            .then((res) => {
                const data = res.data?.data?.[0];
                if (data) {
                    setVision(data.vision2 || "");
                    setMission(data.mission2 || "");
                }
            })
            .catch((err) => {
                console.error("Gagal memuat data visi & misi:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Judul */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Visi & Misi{" "}
                        <span className="text-primary">Keilmuan</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Landasan utama Akademi Keperawatan Justitia dalam
                        mencetak generasi unggul dan berdaya saing.
                    </p>
                </div>

                {loading ? (
                    <p className="text-center text-gray-500 italic">
                        Memuat data...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Visi */}
                        <div className="bg-gray-50 rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">
                                Visi
                            </h3>
                            <div
                                className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify prose prose-sm"
                                dangerouslySetInnerHTML={{ __html: vision }}
                            />
                        </div>

                        {/* Misi */}
                        <div className="bg-gray-50 rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">
                                Misi
                            </h3>
                            <div
                                className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify prose prose-sm"
                                dangerouslySetInnerHTML={{ __html: mission }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VisiMisi2;
