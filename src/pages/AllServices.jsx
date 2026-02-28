import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AllServices = () => {
    return (
        <div className="bg-brand-light pb-20">
            <SEO
                title="Interventional Radiology Services | Dr. Kamlesh Talesra"
                description="Explore advanced minimally invasive interventional radiology services offered by Dr. Kamlesh Talesra in Bhopal, including Thyroid, Vascular, Stroke, and Fibroid treatments."
            />

            {/* Header */}
            <div className="bg-brand-blue py-16 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-brand-dark opacity-50 diagram-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-teal font-bold tracking-wider uppercase drop-shadow-md">Treatments</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">Services Offered</h1>
                    <p className="text-xl text-brand-light max-w-2xl mx-auto opacity-90 drop-shadow-sm">
                        State-of-the-art minimally invasive procedures providing faster recovery, no scars, and life-changing results.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Thyroid */}
                    <Link to="/services/thyroid" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Thyroid & Parathyroid</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Advanced ablation techniques for benign thyroid nodules and parathyroid adenomas without neck surgery.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>

                    {/* Vascular */}
                    <Link to="/services/vascular" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Vascular Interventions</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Minimally invasive angioplasty and stenting to restore blood flow in blocked peripheral arteries.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>

                    {/* Stroke */}
                    <Link to="/services/stroke" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Stroke Management</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Emergency mechanical thrombectomy and aneurysm coiling to prevent severe brain damage during acute strokes.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>

                    {/* Venous */}
                    <Link to="/services/venous" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Venous Disorders</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Endovenous laser treatment (EVLT) and radiofrequency ablation for painful varicose veins and deep vein tracking.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>

                    {/* Fibroid */}
                    <Link to="/services/fibroid" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Fibroid Embolization</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Uterine Fibroid Embolization (UFE) is a non-surgical alternative providing complete relief from heavy bleeding without uterus removal.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>

                    {/* Prostate */}
                    <Link to="/services/prostate" className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group flex flex-col h-full">
                        <div className="h-14 w-14 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition shadow-sm">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal smooth-transition">Prostate Embolization</h3>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">Prostate Artery Embolization (PAE) offers quick relief from BPH enlargement symptoms without extensive surgery or sexual side effects.</p>
                        <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-teal smooth-transition mt-auto">
                            Learn More <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;
