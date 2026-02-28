import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { HashLink } from 'react-router-hash-link';

const Layout = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/' || location.pathname === '/Kamlesh/';

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* HEADER / NAVIGATION */}
            <header className="fixed w-full top-0 z-50 glass-panel shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Dr. Kamlesh Talesra Logo" className="h-12 w-auto" />
                            <div>
                                <h1 className="text-xl font-bold text-brand-blue leading-tight">Dr. Kamlesh Talesra</h1>
                                <p className="text-sm text-gray-500 hidden sm:block">Interventional Radiologist</p>
                            </div>
                        </Link>

                        {/* Navigation & Social Icons Container */}
                        <div className="hidden md:flex items-center space-x-6">
                            <nav className="flex space-x-6 items-center relative">
                                <Link to="/" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Home</Link>

                                {/* Services Dropdown */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <button className="text-brand-blue hover:text-brand-teal font-medium smooth-transition flex items-center gap-1">
                                        Services Offered
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isServicesOpen && (
                                        <div className="absolute top-full left-0 w-64 pt-4">
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 popup-animation">
                                                <Link to="/services/thyroid" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Thyroid & Parathyroid Treatments</Link>
                                                <Link to="/services/vascular" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Vascular Interventions</Link>
                                                <Link to="/services/stroke" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Stroke & Aneurysm Management</Link>
                                                <Link to="/services/venous" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Venous Disorders</Link>
                                                <Link to="/services/fibroid" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Uterine Fibroid Embolization</Link>
                                                <Link to="/services/prostate" className="block px-4 py-3 text-sm text-brand-blue hover:bg-brand-light hover:text-brand-teal smooth-transition">Prostate Artery Embolization</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Link to="/patients" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Happy Patients</Link>
                                <Link to="/about" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">About Us</Link>
                                <Link to="/contact" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Contact Us</Link>
                            </nav>

                            {/* Social Icons */}
                            <SocialIcons className="flex items-center space-x-3 pl-4 border-l border-gray-200" />

                            {/* CTA Button */}
                            <div className="pl-4">
                                <a
                                    href="https://wa.me/919406523513"
                                    target="_blank" rel="noopener noreferrer"
                                    className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-teal smooth-transition shadow-lg hover:shadow-xl text-sm"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* RENDER CURRENT PAGE */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main >

            {/* FOOTER */}
            <footer className="bg-brand-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 diagram-pattern opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-teal mb-2">Dr. Kamlesh Talesra</h3>
                        <p className="text-white/80 font-medium mb-6 text-sm tracking-wide">MBBS, MD (Radiodiagnosis) | Interventional Radiologist</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">Expert Interventional Radiology services in Bhopal. State-of-the-art minimally invasive treatments providing faster and safer recovery.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-brand-teal/30 inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-brand-teal hover:pl-2 transition-all flex items-center gap-2"><span className="text-brand-teal text-xs">➤</span> Home</Link></li>
                            <li><Link to="/patients" className="hover:text-brand-teal hover:pl-2 transition-all flex items-center gap-2"><span className="text-brand-teal text-xs">➤</span> Happy Patients</Link></li>
                            <li><Link to="/services/vascular" className="hover:text-brand-teal hover:pl-2 transition-all flex items-center gap-2"><span className="text-brand-teal text-xs">➤</span> All Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-brand-teal/30 inline-block pb-1">Contact & Location</h3>
                        <div className="flex items-start gap-3 mb-4">
                            <svg className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <div>
                                <p className="text-brand-teal text-sm mb-1 font-bold">Bansal Hospital</p>
                                <p className="text-gray-300 text-sm leading-relaxed">Chuna Bhatti, Kolar Rd, Sector C, Shahpura, Bhopal, Madhya Pradesh 462016</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-8">
                            <svg className="w-5 h-5 text-brand-teal shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            <p className="text-gray-300 text-sm font-bold tracking-wider">WhatsApp: <a href="https://wa.me/919406523513" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-teal">+91 94065 23513</a></p>
                        </div>

                        <div className="flex space-x-4 mt-2">
                            <SocialIcons className="flex items-center space-x-3 [&>a]:bg-white/10 [&>a]:p-2 [&>a]:rounded-full hover:[&>a]:bg-brand-teal hover:[&>a]:text-brand-dark transition-all [&_span]:border-none [&_span]:bg-transparent [&_span]:text-white" />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Dr. Kamlesh Talesra. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
