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
