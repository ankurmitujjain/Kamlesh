import React from 'react';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

const AboutUs = () => {
    return (
        <div className="bg-brand-light pb-20">
            <SEO
                title="About Dr. Kamlesh Talesra | Interventional Radiologist"
                description="Learn more about Dr. Kamlesh Talesra, a leading Interventional Radiologist in Bhopal with over 22 years of experience providing non-surgical treatments."
            />

            {/* Header / Hero Section */}
            <div className="bg-brand-blue py-16 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-brand-dark opacity-50 diagram-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-brand-teal font-bold tracking-wider uppercase drop-shadow-md">About The Doctor</span>
                        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">Meet Dr. Kamlesh Talesra</h1>
                        <p className="text-xl text-brand-light opacity-90 drop-shadow-sm">
                            Providing expert non-surgical care and precision treatments since 2004.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row relative">

                    {/* Image Section */}
                    <div className="w-full md:w-2/5 bg-brand-light p-8 flex items-center justify-center relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl"></div>
                        <img
                            src={`${import.meta.env.BASE_URL}images/dr_kamlesh_cropped.jpg`}
                            alt="Dr. Kamlesh Talesra Portrait"
                            className="w-full max-w-sm rounded-[40px] shadow-2xl relative z-10 border-4 border-white object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-sm mb-4 border border-brand-teal/20 w-max">
                            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                            Senior Consultant Radiologist
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-2">Dr. Kamlesh Talesra</h2>
                        <h3 className="text-lg text-gray-500 mb-6 font-medium">MBBS, MD (Radiodiagnosis)</h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                            <p>
                                Dr. Kamlesh Talesra is a renowned Interventional Radiologist practicing in Bhopal, India, with over two decades of dedicated medical experience. He specializes in advanced, minimally invasive image-guided procedures that offer patients a safe and highly effective alternative to traditional open surgery.
                            </p>
                            <p>
                                After completing his MBBS from Shyam Shah Medical College, Rewa in 2000, and his MD in Radio Diagnosis from Gajaraj Raja Medical College, Gwalior in 2004, Dr. Talesra committed his career to mastering endovascular techniques.
                            </p>
                            <p>
                                He currently serves as a Senior Consultant at Bansal Hospital, focusing on vascular disease treatments, benign tumor ablations, and stroke management. His approach prioritizes immediate recovery and zero scarring.
                            </p>
                        </div>

                        {/* Social Profile Links */}
                        <div className="mt-2 border-t border-gray-100 pt-6">
                            <p className="text-sm font-bold text-brand-blue mb-4 uppercase tracking-wider">Connect Professionally</p>
                            <SocialIcons className="flex items-center gap-4" />
                        </div>
                    </div>
                </div>

                {/* Professional Experience Timeline */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-brand-blue mb-12">Professional Experience</h3>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative border-l-4 border-brand-teal/30 ml-6 md:ml-12 pl-8 md:pl-12 space-y-12">

                            {/* Timeline Item 1 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-brand-teal border-4 border-white shadow-md"></span>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-bl-[100px] -z-10 group-hover:bg-brand-teal/10 transition-colors"></div>
                                    <h4 className="text-xl font-bold text-brand-dark">Consultant Interventional Radiologist</h4>
                                    <p className="text-brand-teal font-bold mb-2">Bansal Hospital, Bhopal</p>
                                    <p className="text-sm text-gray-500 mb-3 font-medium flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                                        Current Position
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Leading the Interventional Radiology and Vascular Surgery divisions. Performing advanced day-care procedures including Vascular Stenting, Microwave Ablations, and Embolizations.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-brand-blue border-4 border-white shadow-md"></span>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-[100px] -z-10 group-hover:bg-brand-blue/10 transition-colors"></div>
                                    <h4 className="text-xl font-bold text-brand-dark">Senior Resident</h4>
                                    <p className="text-brand-teal font-bold mb-2">BMHRC Central Govt Hospital</p>
                                    <p className="text-gray-600 text-sm">
                                        Served as a Senior Resident, providing expert care and managing emergency cases in one of the premier central government hospitals.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-brand-teal border-4 border-white shadow-md"></span>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-bl-[100px] -z-10 group-hover:bg-brand-teal/10 transition-colors"></div>
                                    <h4 className="text-xl font-bold text-brand-dark">Assistant Professor</h4>
                                    <p className="text-brand-teal font-bold mb-2">Gajra Raja Medical College, Gwalior</p>
                                    <p className="text-gray-600 text-sm">
                                        Educated and trained the next generation of medical professionals while handling complex clinical diagnosis and specialized interventions.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Item 4 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-gray-400 border-4 border-white shadow-md"></span>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-gray-100 transition-colors"></div>
                                    <h4 className="text-xl font-bold text-brand-dark">Senior Fellowship & Member</h4>
                                    <p className="text-brand-teal font-bold mb-2">ISVIR, CIRSE, & IRIA</p>
                                    <p className="text-gray-600 text-sm">
                                        Active professional memberships in the Indian Society of Vascular and Interventional Radiology, Cardiovascular and Interventional Radiological Society of Europe, and the Indian Radiological and Imaging Association.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] md:-left-[61px] top-1 w-6 h-6 rounded-full bg-gray-300 border-4 border-white shadow-md"></span>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-gray-100 transition-colors"></div>
                                    <h4 className="text-xl font-bold text-brand-dark">MD (Radio Diagnosis)</h4>
                                    <p className="text-brand-teal font-bold mb-2">G.R. Medical College, Gwalior</p>
                                    <p className="text-sm text-gray-500 mb-3 font-medium flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                                        Completed 2004
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Honors postgraduate master's degree in extensive radiological diagnostics and minimally-invasive surgery methodologies.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
