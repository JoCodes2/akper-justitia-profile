import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import universityLogo from "../assets/logo-universitas.png";
import { useScrollTo } from "./Ui/useScrollTo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfilOpen, setIsProfilOpen] = useState(false);
    const [isAkademikOpen, setIsAkademikOpen] = useState(false);
    const [isAppsOpen, setIsAppsOpen] = useState(false);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isPrefixActive = (prefix) => location.pathname.startsWith(prefix);

    const scrollTo = useScrollTo();

    return (
        <nav className="bg-primary backdrop-blur border-b border-primary-dark shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                            src={universityLogo}
                            alt="Logo Akper Justitia"
                            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain bg-white p-1 rounded-md"
                        />

                        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight">
                            <span className="block sm:hidden md:block lg:hidden">
                                AKPER Justitia
                            </span>
                            <span className="hidden sm:block md:hidden lg:block ">
                                Akademi Keperawatan Justitia
                            </span>
                        </h1>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive("/")
                                    ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                                }`}
                        >
                            Beranda
                        </Link>

                        {/* Profil Dropdown */}
                        <div className="relative group">
                            <button
                                className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${isPrefixActive("/profil")
                                        ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                        : "text-white hover:bg-white/10 hover:text-yellow-200"
                                    }`}
                            >
                                Profil
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                <Link
                                    to="/profil/sejarah-visi-misi"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/profil/sejarah-visi-misi")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    Sejarah & Visi Misi
                                </Link>
                                <Link
                                    to="/profil/struktur-organisasi"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/profil/struktur-organisasi")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    Struktur Organisasi & Pimpinan
                                </Link>
                            </div>
                        </div>

                        {/* Akademik Dropdown */}
                        <div className="relative group">
                            <button
                                className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${isPrefixActive("/akademik")
                                        ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                        : "text-white hover:bg-white/10 hover:text-yellow-200"
                                    }`}
                            >
                                Akademik
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                <Link
                                    to="/program-studi"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/program-studi")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    Program Studi
                                </Link>
                            </div>
                        </div>

                        <Link
                            to="/fasilitas"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isPrefixActive("/fasilitas")
                                    ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                                }`}
                        >
                            Fasilitas
                        </Link>

                        <Link
                            to="/galeri"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isPrefixActive("/galeri")
                                    ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                                }`}
                        >
                            Galeri
                        </Link>

                        <Link
                            to="/berita"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isPrefixActive("/berita")
                                    ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                                }`}
                        >
                            Berita
                        </Link>

                        {/* Apps Dropdown */}
                        <div className="relative group">
                            <button
                                className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${isPrefixActive("/apps")
                                        ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                        : "text-white hover:bg-white/10 hover:text-yellow-200"
                                    }`}
                            >
                                Apps
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                <Link
                                    to="/apps/sister"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/sister")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    SISTER
                                </Link>

                                <Link
                                    to="/apps/sista"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/sista")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    SISTA
                                </Link>

                                <Link
                                    to="/apps/pddikti"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/pddikti")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    PDDIKTI
                                </Link>

                                <Link
                                    to="/apps/upm"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/upm")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    UPM
                                </Link>

                                <Link
                                    to="/apps/uupm"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/uupm")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    UUPM
                                </Link>

                                <Link
                                    to="/apps/perpustakaan"
                                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${isActive("/apps/perpustakaan")
                                            ? "text-primary font-semibold bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                >
                                    PERPUSTAKAAN
                                </Link>
                            </div>

                        </div>

                        <button
                            onClick={() => scrollTo("footer", -80)}
                            href="#footer"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isPrefixActive("/kontak")
                                    ? "bg-white/20 text-yellow-300 font-semibold shadow-inner"
                                    : "text-white hover:bg-white/10 hover:text-yellow-200"
                                }`}
                        >
                            Kontak
                        </button>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            aria-label="Toggle Menu"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-200 p-2 rounded-md hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content - Diperbarui untuk lebih elegan */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="bg-white p-4 border-t border-gray-200 rounded-b-md shadow-xl">
                        <div className="space-y-1">
                            <Link
                                to="/"
                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive("/")
                                        ? "bg-primary/15 text-primary font-semibold shadow-sm"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="ml-2">Beranda</span>
                            </Link>

                            {/* Profil Accordion */}
                            <div className="rounded-lg overflow-hidden">
                                <button
                                    onClick={() =>
                                        setIsProfilOpen(!isProfilOpen)
                                    }
                                    className={`flex justify-between items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isPrefixActive("/profil")
                                            ? "bg-primary/15 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                        }`}
                                >
                                    <span>Profil</span>
                                    {isProfilOpen ? (
                                        <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isProfilOpen
                                            ? "max-h-32 opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    <div className="ml-4 pl-2 border-l-2 border-primary/20 space-y-1 py-1">
                                        <Link
                                            to="/profil/sejarah-visi-misi"
                                            className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive(
                                                "/profil/sejarah-visi-misi"
                                            )
                                                    ? "bg-primary/15 text-primary font-semibold"
                                                    : "text-gray-600 hover:bg-blue-50 hover:text-primary"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Sejarah & Visi Misi
                                        </Link>
                                        <Link
                                            to="/profil/struktur-organisasi"
                                            className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive(
                                                "/profil/struktur-organisasi"
                                            )
                                                    ? "bg-primary/15 text-primary font-semibold"
                                                    : "text-gray-600 hover:bg-blue-50 hover:text-primary"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Struktur Organisasi & Pimpinan
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Akademik Accordion */}
                            <div className="rounded-lg overflow-hidden">
                                <button
                                    onClick={() =>
                                        setIsAkademikOpen(!isAkademikOpen)
                                    }
                                    className={`flex justify-between items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isPrefixActive("/akademik")
                                            ? "bg-primary/15 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                        }`}
                                >
                                    <span>Akademik</span>
                                    {isAkademikOpen ? (
                                        <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isAkademikOpen
                                            ? "max-h-32 opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    <div className="ml-4 pl-2 border-l-2 border-primary/20 space-y-1 py-1">
                                        <Link
                                            to="/program-studi"
                                            className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive("/program-studi")
                                                    ? "bg-primary/15 text-primary font-semibold"
                                                    : "text-gray-600 hover:bg-blue-50 hover:text-primary"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Program Studi
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/fasilitas"
                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isPrefixActive("/fasilitas")
                                        ? "bg-primary/15 text-primary font-semibold shadow-sm"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="ml-2">Fasilitas</span>
                            </Link>

                            <Link
                                to="/galeri"
                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isPrefixActive("/galeri")
                                        ? "bg-primary/15 text-primary font-semibold shadow-sm"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="ml-2">Galeri</span>
                            </Link>

                            <Link
                                to="/berita"
                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isPrefixActive("/berita")
                                        ? "bg-primary/15 text-primary font-semibold shadow-sm"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="ml-2">Berita</span>
                            </Link>

                            {/* Apps Accordion */}
                            <div className="rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setIsAppsOpen(!isAppsOpen)}
                                    className={`flex justify-between items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isPrefixActive("/apps")
                                            ? "bg-primary/15 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                        }`}
                                >
                                    <span>Apps</span>
                                    {isAppsOpen ? (
                                        <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isAppsOpen
                                            ? "max-h-32 opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    <div className="ml-4 pl-2 border-l-2 border-primary/20 space-y-1 py-1">
                                        <Link
                                            to="/apps/sister"
                                            className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive("/apps/sister")
                                                    ? "bg-primary/15 text-primary font-semibold"
                                                    : "text-gray-600 hover:bg-blue-50 hover:text-primary"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            SISTER
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => scrollTo("footer", -80)}
                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isPrefixActive("/kontak")
                                        ? "bg-primary/15 text-primary font-semibold shadow-sm"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                    }`}
                            >
                                <span className="ml-2">Kontak</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
