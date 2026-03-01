import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const Patients = () => {
    useEffect(() => {
        // Dynamically insert the SociableKit script when the component mounts
        // This ensures the widget re-initializes correctly when navigating via React Router
        const script = document.createElement("script");
        script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

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
                <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Verified Google Reviews</h2>

                {/* Live Google Reviews powered by SociableKit */}
                <div className="sk-ww-google-reviews" data-embed-id="25658701"></div>

                {/* CTA */}
                <div className="mt-16 text-center bg-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden border border-brand-light">
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
