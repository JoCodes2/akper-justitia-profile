// src/components/StrukturOrganisasi.jsx
import StrukturImage from "../../assets/carousel/slide1.jpeg"; // pastikan gambar tersedia

const StrukturOrganisasi = () => {
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
                        Susunan pimpinan dan pejabat struktural Universitas
                        AZLAM
                    </p>
                </div>

                {/* Bagan Gambar */}
                <div className="mb-12">
                    <img
                        src={StrukturImage}
                        alt="Struktur Organisasi Universitas AZLAM"
                        className="w-full max-h-[600px] object-contain rounded-lg shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default StrukturOrganisasi;
