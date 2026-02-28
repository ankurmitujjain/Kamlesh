import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
    };

    const slides = [
        {
            id: 1,
            bg: "images/slider/slide1.jpg",
            title: "Say No To Surgery",
            subtitle: "Minimally Invasive Treatments",
            highlight: "Thyroid Nodules",
            description: "Non-Surgical Microwave Ablation for faster recovery and zero scarring."
        },
        {
            id: 2,
            bg: "images/slider/slide2.jpg",
            title: "Advanced Care Without Cuts",
            subtitle: "Endovascular Treatments",
            highlight: "Varicose Veins",
            description: "Painless Laser Therapy (EVLT) and VenaSeal to get you back on your feet immediately."
        },
        {
            id: 3,
            bg: "images/slider/slide3.jpg",
            title: "Expertise You Can Trust",
            subtitle: "Since 2004",
            highlight: "Uterine Fibroids",
            description: "Preserve your uterus with Uterine Fibroid Embolization (UFE), a superior alternative to hysterectomy."
        },
        {
            id: 4,
            bg: "images/slider/slide4.jpg",
            title: "Precision in Every Procedure",
            subtitle: "Bansal Hospital Bhopal",
            highlight: "Enlarged Prostate",
            description: "Prostate Artery Embolization (PAE) offers relief without the sexual side effects of traditional surgery."
        }
    ];

    return (
        <div className="relative w-full h-[85vh] overflow-hidden group">
            <Slider {...settings} className="h-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[85vh] outline-none">
                        {/* Background Image downloaded from reference site */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${slide.bg})` }}
                        />
                        {/* Dark Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />

                        {/* Slide Content Overlay */}
                        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                            <div className="w-full md:w-3/5 lg:w-1/2 pt-20">
                                <span className="inline-block py-1 px-3 rounded-full bg-brand-teal/20 text-brand-teal font-bold tracking-wider uppercase text-sm mb-6 border border-brand-teal/30 backdrop-blur-sm slide-in-bottom animation-delay-100">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg slide-in-bottom animation-delay-200">
                                    {slide.title} <br />
                                    <span className="text-brand-teal italic font-light">{slide.highlight}</span>
                                </h2>
                                <p className="text-lg md:text-xl text-brand-light/90 mb-10 leading-relaxed drop-shadow-md border-l-4 border-brand-teal pl-4 slide-in-bottom animation-delay-300">
                                    {slide.description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 slide-in-bottom animation-delay-400">
                                    <a
                                        href="https://wa.me/919406523513"
                                        target="_blank" rel="noopener noreferrer"
                                        className="group relative px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all flex items-center justify-center gap-3"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            Consult on WhatsApp
                                        </span>
                                        <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    </a>
                                    <a
                                        href="tel:+919406523513"
                                        className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                                    >
                                        Call: +91 94065 23513
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* The Doctor's Cutout Image Overlay */}
                        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-[45%] h-full pointer-events-none hidden md:flex items-end justify-end pr-4 lg:pr-20 z-10 slide-in-right animation-delay-500">
                            <img
                                src={`${import.meta.env.BASE_URL}images/dr_kamlesh_cropped.jpg`}
                                alt="Dr. Kamlesh Talesra"
                                className="max-h-[85%] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] fade-mask-bottom rounded-t-[50px] border-t-4 border-l-4 border-brand-teal/20"
                            />
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Decorative Curvy Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-[2px]">
                <svg fill="#ffffff" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[50px] md:h-[80px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.83,122.28,214.34,120,248.81,118.66,285.92,109.82,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSlider;
