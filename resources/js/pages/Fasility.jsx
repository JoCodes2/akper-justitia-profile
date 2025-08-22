import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, FlaskConical, Users, UserSquare2 } from "lucide-react";
import FadeIn from "../components/Ui/FadeIn";

const fasilitas = [
    {
        title: "Ruang Kelas",
        desc: "Ruang kelas yang nyaman dengan sarana pembelajaran modern untuk mendukung proses belajar mengajar.",
        icon: BookOpen,
    },
    {
        title: "Laboratorium Keperawatan",
        desc: "Lab praktik keperawatan dengan peralatan medis untuk menunjang keterampilan mahasiswa.",
        icon: FlaskConical,
    },
    {
        title: "Ruang Diskusi",
        desc: "Ruang diskusi untuk kegiatan kelompok, presentasi, dan meningkatkan kolaborasi antar mahasiswa.",
        icon: Users,
    },
    {
        title: "Kantor Dosen",
        desc: "Kantor dosen sebagai pusat kegiatan akademik, konsultasi, serta bimbingan mahasiswa.",
        icon: UserSquare2,
    },
];

const Fasility = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50  py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <h1 className="text-3xl font-heading font-bold text-center text-primary mb-4">
                        Fasilitas Kampus
                    </h1>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Akademi Keperawatan Justitia menyediakan fasilitas utama
                        untuk mendukung kegiatan akademik mahasiswa agar belajar
                        dengan nyaman dan efektif.
                    </p>

                    {/* Grid Fasilitas dengan FadeIn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {fasilitas.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <FadeIn key={index} delay={0.2 + index * 0.2}>
                                    <div className="flex items-start gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Fasility;
