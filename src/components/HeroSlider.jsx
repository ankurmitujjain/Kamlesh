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

        </div>
    );
};

export default HeroSlider;
