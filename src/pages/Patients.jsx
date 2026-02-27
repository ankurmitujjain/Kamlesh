import React from 'react';

const Patients = () => {
    return (
        <div className="py-12 bg-white">
            <div className="bg-brand-blue py-16 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-brand-dark opacity-50 diagram-pattern"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Happy Patients</h1>
                    <p className="text-xl text-brand-light max-w-2xl mx-auto opacity-90">Read stories and testimonials from patients whose lives were improved through precise minimally invasive treatments.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-brand-light/30 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg smooth-transition">
                        <div className="flex text-brand-teal mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"Dr. Kamlesh is truly exceptional. He performed an embolization procedure for my uterine fibroids, and the recovery was incredibly fast compared to a traditional surgery. He explained everything beautifully."</p>
                        <p className="font-bold text-brand-dark">- Sita R.</p>
                    </div>

                    <div className="bg-brand-light/30 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg smooth-transition">
                        <div className="flex text-brand-teal mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"I owe my leg to Dr. Talesra's vascular intervention. I had severe peripheral disease and the team at Bansal Hospital, guided by Dr. Kamlesh, saved me from an amputation."</p>
                        <p className="font-bold text-brand-dark">- Ramesh S.</p>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">Have you been treated by Dr. Kamlesh Talesra?</p>
                    <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" target="_blank" rel="noopener noreferrer" className="bg-brand-teal text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark smooth-transition shadow-lg inline-block">
                        Leave a Google Review
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Patients;
