import { Users, Award, Building, BookOpen } from "lucide-react";
import { Link } from "react-router-dom"; // ⬅️ Tambahkan ini
import Button from "../Ui/Button";
import welcomeStudents from "../../assets/carousel/slide2.jpg";

// Komponen Card Lokal
const Card = ({ children, className = "" }) => {
    return (
        <div className={`rounded-xl bg-white shadow border p-4 ${className}`}>
            {children}
        </div>
    );
};

const WelcomeSection = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-4xl font-semibold text-gray-800 mb-4 leading-snug">
                            Selamat Datang di{" "}
                            <span className="text-primary font-bold">
                                Akademi Keperawatan Justitia
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                            Akademi Keperawatan Justitia hadir sebagai lembaga
                            pendidikan kesehatan yang berkomitmen mencetak
                            tenaga keperawatan profesional, berkompeten, dan
                            berakhlak mulia. Dengan kurikulum terintegrasi dan
                            fasilitas pembelajaran modern, kampus ini mendukung
                            mahasiswa untuk siap menghadapi tantangan dunia
                            kesehatan.
                        </p>

                        {/* Tombol diarahkan ke route */}
                        <Link to="/profil/sejarah-visi-misi">
                            <Button
                                size="md"
                                className="bg-primary hover:bg-primary-dark text-sm px-3 py-1.5 sm:text-base sm:px-4 sm:py-2"
                            >
                                Selengkapnya
                            </Button>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={welcomeStudents}
                                alt="Mahasiswa Akademi Keperawatan Justitia"
                                className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-cover brightness-90"
                            />
                        </div>
                        <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-primary text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md text-center">
                            <div className="text-base sm:text-xl font-bold">
                                2003
                            </div>
                            <div className="text-xs sm:text-sm">
                                Tahun Berdiri
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
