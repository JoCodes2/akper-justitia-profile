import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Award, Loader } from "lucide-react";
import FadeIn from "../components/Ui/FadeIn";
import prodiService from "../services/prodiService";

const ProgramStudyPage = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                setLoading(true);
                const data = await prodiService.getAllProdi();
                setPrograms(data);
                setError(null);
            } catch (err) {
                setError("Gagal memuat data program studi");
                console.error("Error fetching programs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen font-body">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <Loader className="animate-spin mx-auto text-primary" size={48} />
                        <p className="mt-4 text-gray-600">Memuat data program studi...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen font-body">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-red-500 text-lg">{error}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (programs.length === 0) {
        return (
            <div className="flex flex-col min-h-screen font-body">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-600">Tidak ada data program studi</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-body">
            <Navbar />

            {/* Hero Section Polos */}
            <section className="text-center py-14 px-6 md:px-10 max-w-7xl mx-auto">
                <FadeIn delay={0.2}>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                        Program Studi
                    </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className="mt-3 text-base md:text-lg text-gray-600 italic">
                        Pilihan program studi yang tersedia di Akper Justitia
                    </p>
                </FadeIn>
            </section>

            {/* Content Section */}
            <div className="bg-gray-50 flex-grow">
                <section className="py-10 px-6 md:px-10 max-w-7xl mx-auto space-y-10">
                    {programs.map((program, index) => (
                        <FadeIn key={program.id} delay={index * 0.2}>
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                                <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
                                    {program.name || program.nama_prodi || "Program Studi"}
                                </h2>
                                <div className="space-y-3">
                                    <p className="flex items-center gap-3">
                                        <GraduationCap className="text-primary-dark" />
                                        <span>
                                            <span className="font-semibold">
                                                Jenjang:
                                            </span>{" "}
                                            {program.level || program.jenjang || "-"}
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <Award className="text-primary-dark" />
                                        <span>
                                            <span className="font-semibold">
                                                Akreditasi:
                                            </span>{" "}
                                            {program.accreditation || program.akreditasi || "-"}
                                        </span>
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-6">
                                    {program.description || program.deskripsi || "Tidak ada deskripsi"}
                                </p>
                            </div>
                        </FadeIn>
                    ))}


                </section>
            </div>

            <Footer />
        </div>
    );
};

export default ProgramStudyPage;
