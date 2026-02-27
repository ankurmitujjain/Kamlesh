import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

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

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center relative">
                            <Link to="/" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Home</Link>
                            {isHome ? (
                                <a href="#about" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">About</a>
                            ) : (
                                <Link to="/#about" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">About</Link>
                            )}

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button className="text-brand-blue hover:text-brand-teal font-medium smooth-transition flex items-center gap-1">
                                    Services
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
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex">
                            <a
                                href="https://wa.me/919406523513"
                                target="_blank" rel="noopener noreferrer"
                                className="bg-brand-blue text-white px-6 py-2 rounded-full font-medium hover:bg-brand-teal smooth-transition shadow-lg"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* RENDER CURRENT PAGE */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer className="bg-brand-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-brand-teal mb-4">Dr. Kamlesh Talesra</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Expert Interventional Radiology services in Bhopal. State-of-the-art minimally invasive treatments providing faster and safer recovery.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-brand-teal transition">Home</Link></li>
                            <li><Link to="/patients" className="hover:text-brand-teal transition">Happy Patients</Link></li>
                            <li><Link to="/services/vascular" className="hover:text-brand-teal transition">All Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact & Location</h3>
                        <p className="text-gray-300 text-sm mb-2 font-medium">Bansal Hospital</p>
                        <p className="text-gray-400 text-sm mb-4">Chuna Bhatti, Kolar Rd, Sector C, Shahpura, Bhopal, Madhya Pradesh 462016</p>
                        <p className="text-gray-300 text-sm mb-4">WhatsApp: +91 00000 00000</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/kamleshtalesra" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-dark transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/drkamlesh_talesra" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-teal hover:text-brand-dark transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
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
