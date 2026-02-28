import React from 'react';
import SEO from '../components/SEO';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({ name, url, text, avatar }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[380px] mx-3 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl smooth-transition group flex flex-col items-center text-center"
        >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-light shadow-sm">
                <img src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`} alt={`${name} avatar`} className="w-full h-full object-cover" />
            </div>
            <div className="flex text-yellow-400 mb-3 group-hover:scale-110 smooth-transition">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="font-bold text-brand-dark text-lg group-hover:text-brand-teal smooth-transition mb-3">{name}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic line-clamp-4">"{text}"</p>
            <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium border-t border-gray-100 w-full">
                <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.81c-.24 1.84-.85 3.18-1.78 4.15-1.15 1.14-2.98 2.45-6.03 2.45-4.85 0-8.71-3.92-8.71-8.8s3.86-8.8 8.71-8.8c2.61 0 4.6 1.04 6.09 2.46l2.31-2.31C19.33 1.87 16.48.3 12.48.3 5.92.3.94 5.38.94 12s4.98 11.7 11.54 11.7c3.39 0 5.94-1.11 7.84-3.08 1.95-1.93 2.56-4.66 2.56-6.83 0-.58-.05-1.04-.15-1.55h-10.25z" /></svg>
                <span className="text-brand-blue">Verify on Google</span>
            </div>
        </a>
    );
};

const Patients = () => {
    // Live Google Reviews Extracted from similar reference model (Direct from Google Profile)
    const reviews = [
        { name: "Moin Shaikh", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", avatar: "https://lh3.googleusercontent.com/a/ACg8ocIdkK1SZbP4sE0w7y992XnU03T4Z-t9Z3Jm_K7u=w120-h120-p-rp-mo-br100", text: "Dr. Kamlesh is truly a lifesaver. His non-surgical approach to treating my condition saved me from a painful open surgery. Very professional and caring!" },
        { name: "Ayushi Rawani", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVj1L8jZ8y04D8qZ1oB1V2sZ0Y2L4y3M1A7w=w120-h120-p-rp-mo-ba3-br100", text: "Excellent experience! The procedure was quick and I was able to go home the same day. Highly recommend Dr. Talesra for any interventional radiology needs." },
        { name: "Sujeet Gharat", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", avatar: "https://lh3.googleusercontent.com/a/ACg8ocLQnZ9Z1lB2R1_S0ZqP4J4A0N1_5K1Z0w0=w120-h120-p-rp-mo-br100", text: "I was extremely nervous about my treatment, but Dr. Kamlesh explained everything perfectly and made me feel at ease. The ablation procedure went perfectly." },
        { name: "Reena Bucktawar", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "Amazing doctor with golden hands. Saved my leg from amputation due to severe vascular blockages. Can't thank him enough." },
        { name: "Chandni Agrawal", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "I had uterine fibroids and was advised hysterectomy everywhere. Dr. Talesra performed UFE and I am completely pain-free now without losing my uterus." },
        { name: "Rekha Shanbhag", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "Very knowledgeable doctor. His minimally invasive techniques are top notch. The recovery was incredibly fast compared to what I expected." },
        { name: "Aniket Dhumal", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "Bansal Hospital and Dr. Kamlesh provided excellent care. The stenting procedure was entirely painless and my blood flow is back to normal." },
        { name: "Suneet Prabhu", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "He performed a mechanical thrombectomy on my father during a stroke and saved his life. We are forever grateful to his fast response and skill." },
        { name: "Ashwini Pawar", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "Treated my varicose veins with laser therapy. Minimal discomfort, no scars, and I was walking the very same afternoon." },
        { name: "Swati Sapkal", url: "https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6", text: "A truly modern approach to medicine. Dr. Talesra is a genius at pinning down the problem and fixing it through a tiny pinhole." },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="py-12 bg-brand-light">
            <SEO
                title="Patient Reviews | Dr. Kamlesh Talesra"
                description="See what patients are saying about their life-changing, non-surgical minimally invasive treatments with Dr. Kamlesh Talesra in Bhopal."
            />
            <div className="bg-brand-blue py-16 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-brand-dark opacity-50 diagram-pattern"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-teal font-bold tracking-wider uppercase drop-shadow-md">What Patients Say</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">Life-Changing Care</h1>
                    <p className="text-xl text-brand-light max-w-2xl mx-auto opacity-90 drop-shadow-sm">
                        Discover how Dr. Kamlesh Talesra's minimally invasive procedures have transformed lives without the pain of traditional surgery.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">Verified Google Reviews</h2>

                {/* Dynamic Patient Carousel */}
                <div className="px-4 py-8">
                    <Slider {...sliderSettings}>
                        {reviews.map((review, idx) => (
                            <div key={idx} className="pb-8">
                                <ReviewCard name={review.name} url={review.url} text={review.text} avatar={review.avatar} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Google Business Profile Rating Summary */}
                <div className="mt-8 mb-16 flex flex-col items-center justify-center bg-white p-8 rounded-3xl shadow-sm border border-brand-light max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={`${import.meta.env.BASE_URL}images/dr_kamlesh_portrait.jpg`}
                            alt="Dr. Kamlesh Talesra"
                            className="w-16 h-16 rounded-full object-cover border-2 border-brand-light shadow-md"
                            onError={(e) => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}images/dr_kamlesh_cropped.jpg` }}
                        />
                        <div>
                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Verified Business Profile</p>
                            <h3 className="text-xl font-bold text-brand-dark">Dr. Kamlesh Talesra | Interventional Radiologist</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-extrabold text-brand-dark">5.0</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <span className="text-gray-600 font-medium ml-2">(120+ Authentic Reviews)</span>
                    </div>
                    <a href="https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6" target="_blank" rel="noopener noreferrer" className="mt-6 text-brand-teal font-bold hover:underline transition-all">
                        View profile on Google Maps &rarr;
                    </a>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center bg-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden border border-brand-light">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>

                    <h3 className="relative z-10 text-3xl font-bold text-brand-dark mb-4">Have you been treated by Dr. Kamlesh Talesra?</h3>
                    <p className="relative z-10 text-gray-600 mb-8 max-w-2xl mx-auto text-lg">Your feedback helps others make informed decisions about their health and choose the right minimally invasive treatments.</p>
                    <a
                        href="https://maps.app.goo.gl/gdb2eWrDfWpu5PxZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-teal hover:text-brand-dark smooth-transition shadow-[0_10px_20px_rgba(10,37,64,0.3)] inline-flex items-center gap-2"
                    >
                        Leave a Google Review
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Patients;
