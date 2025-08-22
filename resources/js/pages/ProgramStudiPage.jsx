import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Award } from "lucide-react";
import FadeIn from "../components/Ui/FadeIn";

const ProgramStudyPage = () => {
    const program = {
        name: "Program Studi Keperawatan",
        degree: "Diploma Tiga (D-3)",
        accreditation: "Akreditasi B",
        description:
            "Program Studi D-3 Keperawatan Akper Justitia bertujuan menghasilkan tenaga kesehatan yang profesional, kompeten, dan siap mengabdi kepada masyarakat dalam bidang pelayanan keperawatan dasar maupun lanjut.",
        motto: "Mengabdi dengan Ilmu, Melayani dengan Hati.",
    };

    return (
        <div className="flex flex-col min-h-screen font-body">
            <Navbar />

            {/* Hero Section Polos */}
            <section className="text-center py-14 px-6 md:px-10 max-w-7xl mx-auto">
                <FadeIn delay={0.2}>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                        {program.name}
                    </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className="mt-3 text-base md:text-lg text-gray-600 italic">
                        {program.motto}
                    </p>
                </FadeIn>
            </section>

            {/* Content Section */}
            <div className="bg-gray-50 flex-grow">
                <section className="py-10 px-6 md:px-10 max-w-7xl mx-auto space-y-10">
                    {/* Detail Card */}
                    <FadeIn delay={0.2}>
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
                                Detail Program Studi
                            </h2>
                            <div className="space-y-3">
                                <p className="flex items-center gap-3">
                                    <GraduationCap className="text-primary-dark" />
                                    <span>
                                        <span className="font-semibold">
                                            Jenjang:
                                        </span>{" "}
                                        {program.degree}
                                    </span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Award className="text-primary-dark" />
                                    <span>
                                        <span className="font-semibold">
                                            Akreditasi:
                                        </span>{" "}
                                        {program.accreditation}
                                    </span>
                                </p>
                            </div>
                            <p className="text-gray-700 leading-relaxed mt-6">
                                {program.description}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Prospek Lulusan */}
                    <FadeIn delay={0.4}>
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
                                Prospek Lulusan
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Lulusan Program Studi D-3 Keperawatan memiliki
                                peluang kerja di berbagai fasilitas kesehatan,
                                baik di rumah sakit, puskesmas, klinik, maupun
                                perusahaan. Alumni juga dapat mengembangkan
                                karir sebagai tenaga perawat mandiri sesuai
                                peraturan yang berlaku.
                            </p>
                        </div>
                    </FadeIn>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default ProgramStudyPage;
