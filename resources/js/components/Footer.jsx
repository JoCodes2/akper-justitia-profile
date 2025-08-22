import universityLogo from "../assets/logo-universitas.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="bg-gradient-to-b from-[#1a1f29] to-[#0f131a] text-gray-300 font-body"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 pb-12">
                {/* Info Kampus & Logo */}
                <div className="md:col-span-1">
                    <div className="flex items-center mb-4">
                        <img
                            src={universityLogo}
                            alt="Logo Akper Justitia"
                            className="h-12 w-12 object-contain bg-white p-1 rounded-md mr-3"
                        />
                        <h2 className="text-xl font-heading font-bold text-white">
                            AKPER Justitia
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400 mb-4">
                        Akademi Keperawatan Justitia adalah institusi pendidikan
                        tinggi yang berkomitmen mencetak tenaga kesehatan
                        profesional, berintegritas, dan siap mengabdi kepada
                        masyarakat.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <i className="fab fa-facebook-f w-5 h-5"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <i className="fab fa-twitter w-5 h-5"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <i className="fab fa-instagram w-5 h-5"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <i className="fab fa-youtube w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                {/* Link Cepat */}
                <div>
                    <h2 className="text-lg font-heading font-bold mb-4 text-primary">
                        Link Cepat
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a
                                href="/program-studi"
                                className="text-gray-400 hover:text-primary transition-colors flex items-center"
                            >
                                <i className="fas fa-chevron-right mr-2"></i>
                                Program Studi
                            </a>
                        </li>
                        <li>
                            <a
                                href="/fasilitas"
                                className="text-gray-400 hover:text-primary transition-colors flex items-center"
                            >
                                <i className="fas fa-chevron-right mr-2"></i>
                                Fasilitas Kampus
                            </a>
                        </li>
                        <li>
                            <a
                                href="/galeri"
                                className="text-gray-400 hover:text-primary transition-colors flex items-center"
                            >
                                <i className="fas fa-chevron-right mr-2"></i>
                                Galeri
                            </a>
                        </li>
                        <li>
                            <a
                                href="/berita"
                                className="text-gray-400 hover:text-primary transition-colors flex items-center"
                            >
                                <i className="fas fa-chevron-right mr-2"></i>
                                Berita & Artikel
                            </a>
                        </li>
                        <li>
                            <a
                                href="/kontak"
                                className="text-gray-400 hover:text-primary transition-colors flex items-center"
                            >
                                <i className="fas fa-chevron-right mr-2"></i>
                                Kontak Kami
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Kontak Kami */}
                <div>
                    <h2 className="text-lg font-heading font-bold mb-4 text-primary">
                        Kontak Kami
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                            <i className="fas fa-envelope w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0"></i>
                            <a
                                href="mailto:info@akperjustitia.ac.id"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                info@akperjustitia.ac.id
                            </a>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-phone w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0"></i>
                            <a
                                href="tel:+6281234567890"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                +62 812-3456-7890
                            </a>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-clock w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0"></i>
                            <span className="text-gray-400">
                                Senin - Jumat, 08.00 - 16.00 WITA
                            </span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-map-marker-alt w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0"></i>
                            <span className="text-gray-400">
                                Jln. Uwe Lambori, Tondo, Kec. Mantikulore,{" "}
                                <br />
                                Kota Palu, Sulawesi Tengah 94148
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Lokasi Kampus */}
                <div>
                    <h2 className="text-lg font-heading font-bold mb-4 text-primary">
                        Lokasi Kampus
                    </h2>
                    <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg transition-all hover:border-primary/40 hover:shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3895945236122!2d119.8800876!3d-0.8399525999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bebe215feab27%3A0x53e1bda6a21c6f72!2sAKPER%20Justitia!5e0!3m2!1sid!2sid!4v1755855045126!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Lihat peta yang lebih besar
                    </p>
                </div>
            </div>

            {/* Copyright & Additional Info */}
            <div className="border-t border-gray-800 pt-6 pb-5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500">
                                &copy; {currentYear} Akademi Keperawatan
                                Justitia.{" "}
                                <span className="text-gray-400">
                                    Semua Hak Dilindungi.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
