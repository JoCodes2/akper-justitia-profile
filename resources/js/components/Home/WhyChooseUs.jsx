import { GraduationCap, Users, Globe, Trophy } from "lucide-react";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: GraduationCap,
            title: "Kurikulum Berbasis Kompetensi",
            description:
                "Materi pembelajaran disusun sesuai standar nasional keperawatan dan kebutuhan pelayanan kesehatan.",
            color: "bg-primary/10 text-primary",
        },
        {
            icon: Users,
            title: "Dosen & Praktisi Profesional",
            description:
                "Dibimbing oleh tenaga pendidik berpengalaman dan praktisi kesehatan yang kompeten di bidangnya.",
            color: "bg-green-100 text-green-600",
        },
        {
            icon: Globe,
            title: "Kerjasama Rumah Sakit & Institusi",
            description:
                "Jaringan mitra rumah sakit, puskesmas, dan institusi kesehatan untuk praktik lapangan dan magang.",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Trophy,
            title: "Prestasi & Lulusan Terserap",
            description:
                "Mahasiswa berprestasi di tingkat lokal maupun nasional, dengan lulusan yang cepat terserap di dunia kerja.",
            color: "bg-yellow-100 text-yellow-600",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mengapa Memilih{" "}
                        <span className="text-primary">Kami?</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Akademi Keperawatan Justitia berkomitmen menghadirkan
                        pendidikan keperawatan yang berkualitas, relevan dengan
                        kebutuhan layanan kesehatan, dan berorientasi pada
                        profesionalisme.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="p-5 sm:p-6 rounded-xl border border-gray-100 shadow hover:shadow-md transition duration-300 hover:-translate-y-1 text-center"
                            >
                                <div
                                    className={`${reason.color} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                                >
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
