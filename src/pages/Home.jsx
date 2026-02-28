import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Dr. Kamlesh Talesra | Best Interventional Radiologist in Bhopal"
                description="Get relief with Non-Surgical Treatment for Piles, Varicocele, Thyroid Nodules & Fibroids at Bansal Hospital Bhopal with Dr. Kamlesh Talesra."
            />

            <HeroSlider />

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Image & Map Column */}
                        <div className="md:w-1/2 flex flex-col gap-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-brand-light">
                                <img src={`${import.meta.env.BASE_URL}images/dr_kamlesh_cropped.jpg`} alt="Dr. Kamlesh Talesra" className="w-[80%] mx-auto h-auto object-contain rounded-t-3xl" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue via-brand-blue/90 to-transparent p-6 text-white text-center">
                                    <h3 className="text-2xl font-bold">Dr. Kamlesh Talesra</h3>
                                    <p className="text-brand-teal font-medium">MBBS, MD (Radiodiagnosis)</p>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-64 relative group">
                                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent smooth-transition pointer-events-none z-10"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.936054452136!2d77.41432457605929!3d23.209028710714798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42dfd0251781%3A0xe5427d11019d08e5!2sBansal%20Hospital%20Bhopal!5e0!3m2!1sen!2sin!4v1709021445037!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dr Kamlesh Talesra Clinic Location"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        {/* Text Content Column */}
                        <div className="md:w-1/2">
                            <span className="text-brand-teal font-bold uppercase tracking-widest text-sm drop-shadow-sm">About Us</span>
                            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight">Providing Expert Care Since 2004</h2>
                            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                                Dr. Kamlesh Talesra is a renowned Interventional Radiologist currently practicing as a Consultant at Bansal Hospital, Bhopal. With a passion for minimal invasive procedures, he has transformed patient care by offering highly effective, safer alternatives to traditional open surgeries.
                            </p>
                            <div className="mt-8 space-y-5 bg-brand-light/40 py-6 px-8 rounded-3xl border border-gray-100">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1 shadow-sm">
                                        <span className="text-brand-dark text-xs font-bold">✓</span>
                                    </div>
                                    <p className="ml-4 text-gray-700"><strong>MBBS:</strong> Shyam Shah Medical College, Rewa</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1 shadow-sm">
                                        <span className="text-brand-dark text-xs font-bold">✓</span>
                                    </div>
                                    <p className="ml-4 text-gray-700"><strong>MD (Radiodiagnosis):</strong> Gajaraj Raja Medical College, Gwalior</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1 shadow-sm">
                                        <span className="text-brand-dark text-xs font-bold">✓</span>
                                    </div>
                                    <p className="ml-4 text-gray-700">Proud Member of ISVIR, CIRSE, and IRIA.</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a
                                    href="https://wa.me/919406523513"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-teal hover:text-brand-dark smooth-transition shadow-[0_10px_20px_rgba(10,37,64,0.15)] group"
                                >
                                    Book a Consultation
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>
                        </div>
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
