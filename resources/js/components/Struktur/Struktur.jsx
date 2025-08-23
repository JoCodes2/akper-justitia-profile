import { useEffect, useState } from "react";
import { apiGet } from "../../admin/helper/api";

const StrukturOrganisasi = () => {
    const [strukturFile, setStrukturFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchStruktur = async () => {
            try {
                const res = await apiGet(`${appUrl}/justitia/profile`);
                const data = res?.data?.data?.[0];

                if (data && data.structure) {
                    setStrukturFile(`/uploads/profile/${data.structure}`);
                } else {
                    setStrukturFile(null);
                }
            } catch (err) {
                console.error("Error fetching struktur:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchStruktur();
    }, []);

    return (
        <section className="py-5 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        Struktur{" "}
                        <span className="text-primary">Organisasi</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                        Susunan pimpinan dan pejabat struktural Akademi
                        Keperawatan Justitia
                    </p>
                </div>

                {/* Gambar Struktur */}
                <div className="mb-12">
                    {loading ? (
                        <div className="text-center py-20 text-gray-400">
                            Memuat struktur organisasi...
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-500">
                            Gagal memuat data.
                        </div>
                    ) : strukturFile ? (
                        <img
                            src={strukturFile}
                            alt="Struktur Organisasi Universitas AZLAM"
                            className="w-full max-h-[600px] object-contain rounded-lg shadow"
                        />
                    ) : (
                        <div className="text-center py-20 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                            <p className="text-gray-500">
                                Belum ada data struktur organisasi
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StrukturOrganisasi;
