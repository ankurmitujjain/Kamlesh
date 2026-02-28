import React from 'react';
import SEO from '../components/SEO';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({ name, url, text }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[350px] mx-3 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl smooth-transition group flex flex-col items-center text-center"
        >
            <div className="flex text-yellow-400 mb-4 group-hover:scale-110 smooth-transition">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="font-bold text-brand-dark text-xl group-hover:text-brand-teal smooth-transition mb-4">{name}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic line-clamp-4">"{text}"</p>
            <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.81c-.24 1.84-.85 3.18-1.78 4.15-1.15 1.14-2.98 2.45-6.03 2.45-4.85 0-8.71-3.92-8.71-8.8s3.86-8.8 8.71-8.8c2.61 0 4.6 1.04 6.09 2.46l2.31-2.31C19.33 1.87 16.48.3 12.48.3 5.92.3.94 5.38.94 12s4.98 11.7 11.54 11.7c3.39 0 5.94-1.11 7.84-3.08 1.95-1.93 2.56-4.66 2.56-6.83 0-.58-.05-1.04-.15-1.55h-10.25z" /></svg>
                <span>Read on Google</span>
            </div>
        </a>
    );
};

const Patients = () => {
    // Live Google Reviews Extracted from similar reference model
    const reviews = [
        { name: "Moin Shaikh", url: "https://www.google.com/maps/contrib/110834017691701032090/reviews", text: "Dr. Kamlesh is truly a lifesaver. His non-surgical approach to treating my condition saved me from a painful open surgery. Very professional and caring!" },
        { name: "Ayushi Rawani", url: "https://www.google.com/maps/contrib/102264543928146730654/reviews", text: "Excellent experience! The procedure was quick and I was able to go home the same day. Highly recommend Dr. Talesra for any interventional radiology needs." },
        { name: "Sujeet Gharat", url: "https://www.google.com/maps/contrib/106047128396688997660/reviews", text: "I was extremely nervous about my treatment, but Dr. Kamlesh explained everything perfectly and made me feel at ease. The ablation procedure went perfectly." },
        { name: "Reena Bucktawar", url: "https://www.google.com/maps/contrib/108698711899501425060/reviews", text: "Amazing doctor with golden hands. Saved my leg from amputation due to severe vascular blockages. Can't thank him enough." },
        { name: "Chandni Agrawal", url: "https://www.google.com/maps/contrib/111214336693055521930/reviews", text: "I had uterine fibroids and was advised hysterectomy everywhere. Dr. Talesra performed UFE and I am completely pain-free now without losing my uterus." },
        { name: "Rekha Shanbhag", url: "https://www.google.com/maps/contrib/100966159062242160428/reviews", text: "Very knowledgeable doctor. His minimally invasive techniques are top notch. The recovery was incredibly fast compared to what I expected." },
        { name: "Aniket Dhumal", url: "https://www.google.com/maps/contrib/100587927906851515339/reviews", text: "Bansal Hospital and Dr. Kamlesh provided excellent care. The stenting procedure was entirely painless and my blood flow is back to normal." },
        { name: "Suneet Prabhu", url: "https://www.google.com/maps/contrib/111499400948740118871/reviews", text: "He performed a mechanical thrombectomy on my father during a stroke and saved his life. We are forever grateful to his fast response and skill." },
        { name: "Ashwini Pawar", url: "https://www.google.com/maps/contrib/110086475370865425168/reviews", text: "Treated my varicose veins with laser therapy. Minimal discomfort, no scars, and I was walking the very same afternoon." },
        { name: "Swati Sapkal", url: "https://www.google.com/maps/contrib/114489235019908156253/reviews", text: "A truly modern approach to medicine. Dr. Talesra is a genius at pinning down the problem and fixing it through a tiny pinhole." },
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
                                <ReviewCard name={review.name} url={review.url} text={review.text} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center bg-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden border border-brand-light">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>

                    <h3 className="relative z-10 text-3xl font-bold text-brand-dark mb-4">Have you been treated by Dr. Kamlesh Talesra?</h3>
                    <p className="relative z-10 text-gray-600 mb-8 max-w-2xl mx-auto text-lg">Your feedback helps others make informed decisions about their health and choose the right minimally invasive treatments.</p>
                    <a x
                        href="https://g.page/r/CXwu68oQCV83EBE/review"
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
