import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SEO from '../components/SEO';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const videoSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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

    const [latestVideos, setLatestVideos] = useState([]);
    const [isLoadingVideos, setIsLoadingVideos] = useState(true);

    // YouTube Channel ID: UCihszJrw1nUDQFSg6EtGkPA (Dr. Kamlesh Talesra)
    const channelId = 'UCihszJrw1nUDQFSg6EtGkPA';

    useEffect(() => {
        // We use rss2json to bypass the lack of a YouTube Data API Key
        // This public proxy converts YouTube's XML RSS feed into a readable JSON format
        const fetchVideos = async () => {
            try {
                const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.status === 'ok') {
                    // Extract the video IDs and Titles from the feed items
                    const videos = data.items.slice(0, 4).map(item => {
                        // The GUID in YouTube RSS is always 'yt:video:VIDEO_ID'
                        const videoId = item.guid.split(':')[2];
                        return { id: videoId, title: item.title };
                    });
                    setLatestVideos(videos);
                }
            } catch (error) {
                console.error("Error fetching latest YouTube videos:", error);
            } finally {
                setIsLoadingVideos(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            <SEO
                title="Dr. Kamlesh Talesra | Best Interventional Radiologist in Bhopal"
                description="Get relief with Non-Surgical Treatment for Piles, Varicocele, Thyroid Nodules & Fibroids at Bansal Hospital Bhopal with Dr. Kamlesh Talesra."
            />

            {/* Quick Profile Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
                        {/* Image Column */}
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl bg-brand-light border-4 border-white w-full max-w-[280px] lg:max-w-[320px]">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/dr_kamlesh_portrait.jpg`}
                                    alt="Dr. Kamlesh Talesra"
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `${import.meta.env.BASE_URL}images/dr_kamlesh_cropped.jpg`
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue via-brand-blue/90 to-transparent p-4 md:p-6 text-white text-center">
                                    <h3 className="text-xl font-bold">Dr. Kamlesh Talesra</h3>
                                    <p className="text-brand-teal font-medium text-sm md:text-base">Sr. Consultant Radiologist</p>
                                </div>
                            </div>
                        </div>

                        {/* Text Content Column */}
                        <div className="md:w-2/3 max-w-2xl">
                            <span className="text-brand-teal font-bold uppercase tracking-widest text-sm drop-shadow-sm">Meet The Expert</span>
                            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-6">Pioneering Non-Surgical Treatments in Bhopal</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                With over 20 years of specialized experience, Dr. Kamlesh Talesra offers advanced, minimally invasive image-guided procedures as a safer alternative to traditional open surgeries.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link to="/about" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-teal hover:text-brand-dark smooth-transition shadow-lg">
                                    View Full Profile
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full font-bold hover:bg-brand-light smooth-transition">
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Video Carousel Section */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue opacity-50 diagram-pattern mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-teal font-bold uppercase tracking-widest text-sm mb-2 block">Patient Education</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights & Procedures</h2>
                        <p className="text-brand-light opacity-90 text-lg">Watch our educational videos to understand how minimally invasive procedures work and how they can change your life.</p>
                    </div>

                    <div className="px-4">
                        {isLoadingVideos ? (
                            <div className="flex justify-center items-center h-48">
                                <span className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal"></span>
                            </div>
                        ) : latestVideos.length > 0 ? (
                            <Slider {...videoSettings} className="video-slider">
                                {latestVideos.map((video, idx) => (
                                    <div key={idx} className="px-3 pb-8">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-4 hover:bg-white/10 smooth-transition h-full flex flex-col">
                                            <div className="rounded-xl overflow-hidden bg-black aspect-video relative shadow-lg ring-1 ring-white/20 mb-4 group">
                                                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                                    <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 smooth-transition" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] group-hover:scale-110 smooth-transition">
                                                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <h3 className="font-bold text-white text-lg line-clamp-2 mt-auto">{video.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className="text-center text-gray-400 py-8">
                                <p>Failed to load latest videos. Please check our channel directly!</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 text-center">
                        <a href="https://www.youtube.com/@DrKamleshTalesra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-teal hover:text-white font-bold tracking-wide transition-colors">
                            Subscribe to our YouTube Channel
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-teal font-bold uppercase tracking-wide">Key Procedures</span>
                        <h2 className="mt-2 text-3xl font-bold text-brand-dark">Advanced Minimally Invasive Treatments</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Utilizing state-of-the-art imaging guidance to perform targeted treatments with pinpoint accuracy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link to="/services/thyroid" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Thyroid Interventions</h3>
                            <p className="text-gray-600">Ablation for thyroid nodules & adenomas.</p>
                        </Link>

                        <Link to="/services/vascular" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Vascular Interventions</h3>
                            <p className="text-gray-600">Angioplasty and stenting for peripheral vascular disease.</p>
                        </Link>

                        <Link to="/services/stroke" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Stroke Management</h3>
                            <p className="text-gray-600">Mechanical thrombectomy for acute brain strokes.</p>
                        </Link>

                        <Link to="/services/venous" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Venous Disorders</h3>
                            <p className="text-gray-600">Advanced treatments for varicose veins.</p>
                        </Link>

                        <Link to="/services/fibroid" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Fibroid Embolization</h3>
                            <p className="text-gray-600">Non-surgical treatment for uterine fibroids.</p>
                        </Link>

                        <Link to="/services/prostate" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                            <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Prostate Embolization</h3>
                            <p className="text-gray-600">Minimally invasive treatment of enlarged prostate.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
