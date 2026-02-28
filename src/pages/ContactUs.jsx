import React from 'react';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

const ContactUs = () => {
    return (
        <div className="bg-brand-light pb-20">
            <SEO
                title="Contact Dr. Kamlesh Talesra | Book Appointment"
                description="Easily book an appointment with Dr. Kamlesh Talesra at Bansal Hospital, Bhopal. Reach out via WhatsApp or phone for immediate consultation."
            />

            {/* Header / Hero Section */}
            <div className="bg-brand-blue py-16 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-brand-dark opacity-50 diagram-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-teal font-bold tracking-wider uppercase drop-shadow-md">Get In Touch</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">Contact Us</h1>
                    <p className="text-xl text-brand-light opacity-90 drop-shadow-sm max-w-2xl mx-auto">
                        Do you have questions about a procedure? Our team is ready to answer all your questions and help you schedule a consultation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-8">Appointment Details</h2>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl smooth-transition mb-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Hospital Address</h3>
                                    <p className="font-bold text-brand-teal mb-1">Bansal Hospital</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Chuna Bhatti, Kolar Rd, Sector C, Shahpura,<br />Bhopal, Madhya Pradesh 462016
                                    </p>
                                </div>
                            </div>

                            <hr className="border-gray-100 my-6" />

                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">WhatsApp Consultation</h3>
                                    <p className="text-gray-600 mb-3 text-sm">Send a message to our clinical coordinator to instantly book an appointment slot.</p>
                                    <a
                                        href="https://wa.me/919406523513"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-colors shadow-md"
                                    >
                                        Chat Now on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-3xl p-8 shadow-xl text-white">
                            <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
                            <p className="text-white/80 mb-6 text-sm leading-relaxed">Stay updated with the latest non-surgical interventions, watch patient videos, and read more clinical reviews directly from our profiles.</p>
                            <SocialIcons className="flex flex-wrap gap-4" />
                        </div>
                    </div>

                    {/* Interactive Map Embed */}
                    <div className="h-full min-h-[500px] w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative group">
                        <div className="absolute inset-0 z-0 bg-gray-200 animate-pulse"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1121820421253!2d77.4243615!3d23.202579999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f0267c870b%3A0xc3c5a691512401ba!2sBansal%20Hospital%20Bhopal!5e0!3m2!1sen!2sin!4v1703649641775!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full border-0 z-10"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bansal Hospital Location Map"
                        ></iframe>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="https://maps.app.goo.gl/t5K3ovamCJoCfRxp6" target="_blank" rel="noopener noreferrer" className="pointer-events-auto bg-brand-dark/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 border border-white/20 whitespace-nowrap hover:bg-brand-teal hover:text-brand-dark transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                Open in Google Maps App
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
