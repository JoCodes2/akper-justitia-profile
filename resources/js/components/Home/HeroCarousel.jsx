import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "../../assets/slide1.jpg";
import heroSlide2 from "../../assets/slide2.jpg";
import heroSlide3 from "../../assets/slide3.jpg";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroSlide1,
            title: "Kampus Ramah dan Nyaman",
            subtitle:
                "Mendukung suasana belajar yang kondusif dan penuh kekeluargaan",
        },
        {
            image: heroSlide2,
            title: "Pendidikan Keperawatan Berkualitas",
            subtitle:
                "Didukung tenaga pendidik profesional dan kurikulum relevan",
        },
        {
            image: heroSlide3,
            title: "Siap Berkarier di Dunia Kesehatan",
            subtitle:
                "Membuka peluang kerja dan pengabdian di berbagai fasilitas kesehatan",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-[30vh] md:h-[40vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(${
                            (index - currentSlide) * 100
                        }%)`,
                    }}
                >
                    <div
                        className="h-full w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70" />

                        {/* Text Content */}
                        <div className="absolute bottom-6 left-4 md:left-16 max-w-xs sm:max-w-sm md:max-w-xl">
                            <h1 className="text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 drop-shadow">
                                {slide.title}
                            </h1>
                            <h2 className="text-xs text-white sm:text-sm md:text-base font-medium drop-shadow">
                                {slide.subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full"
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full"
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full ${
                            index === currentSlide
                                ? "bg-primary"
                                : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
