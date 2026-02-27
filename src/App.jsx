import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* HEADER / NAVIGATION */}
      <header className="fixed w-full top-0 z-50 glass-panel shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src="/images/logo.png" alt="Dr. Kamlesh Talesra Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-brand-blue leading-tight">Dr. Kamlesh Talesra</h1>
                <p className="text-sm text-gray-500">Interventional Radiologist</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Home</a>
              <a href="#about" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">About</a>
              <a href="#services" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Services</a>
              <a href="#contact" className="text-brand-blue hover:text-brand-teal font-medium smooth-transition">Contact</a>
            </nav>
            <div className="hidden md:flex">
              <a
                href="https://wa.me/910000000000" // Placeholder number
                target="_blank" rel="noopener noreferrer"
                className="bg-brand-blue text-white px-6 py-2 rounded-full font-medium hover:bg-brand-teal smooth-transition shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/images/hero.png"
              alt="Interventional Radiology Clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-light to-transparent opacity-90"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="text-brand-teal font-semibold tracking-wider uppercase drop-shadow-md">Advanced Minimally Invasive Care</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-brand-dark leading-tight drop-shadow-sm">
                Expert Interventional Radiology in Bhopal
              </h2>
              <p className="mt-4 text-xl text-gray-800 font-medium">
                Dr. Kamlesh Talesra delivers state-of-the-art treatments with 18+ years of expertise. Faster recovery, minimal risk, and precise care at Bansal Hospital.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://wa.me/910000000000"
                  className="bg-brand-teal text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white smooth-transition shadow-xl text-lg"
                >
                  Consult on WhatsApp
                </a>
                <a
                  href="#services"
                  className="bg-white/80 text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-white smooth-transition shadow-lg text-lg backdrop-blur-sm"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/images/portrait.png" alt="Dr. Kamlesh Talesra" className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-6 text-white text-center">
                    <h3 className="text-2xl font-bold">Dr. Kamlesh Talesra</h3>
                    <p className="text-brand-teal font-medium">Bansal Hospital, Bhopal</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-brand-teal font-bold uppercase tracking-wide">About The Doctor</span>
                <h2 className="mt-2 text-3xl font-bold text-brand-blue">18+ Years of Medical Excellence</h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Dr. Kamlesh Talesra is a renowned Interventional Radiologist currently practicing as a Consultant (Radiology) at Bansal Hospital, Bhopal. With a passion for minimal invasive procedures, he has transformed patient care by offering alternatives to traditional open surgeries.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="ml-3 text-gray-700"><strong>MBBS:</strong> Shyam Shah Medical College, Rewa</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="ml-3 text-gray-700"><strong>MD (Radiodiagnosis):</strong> Gajaraj Raja Medical College, Gwalior</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="ml-3 text-gray-700">Member of ISVIR, CIRSE, and IRIA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-teal font-bold uppercase tracking-wide">Key Procedures</span>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark">Advanced Minimally Invasive Treatments</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Utilizing state-of-the-art imaging guidance to perform targeted treatments with pinpoint accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Thyroid & Parathyroid Interventions</h3>
                <p className="text-gray-600">Microwave and radiofrequency ablation for thyroid nodules & adenomas, preserving healthy tissue.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Vascular Interventions</h3>
                <p className="text-gray-600">Angioplasty and stenting for peripheral vascular disease, preventing gangrene and amputations.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Stroke & Aneurysm Management</h3>
                <p className="text-gray-600">Lifesaving mechanical thrombectomy for acute brain strokes and embolization coiling for aneurysms.</p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Venous Disorders (Varicose Veins)</h3>
                <p className="text-gray-600">Advanced laser therapy and Venaseal treatments for quick, painless recovery from venous issues.</p>
              </div>

              {/* Service 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Uterine Fibroid Embolization</h3>
                <p className="text-gray-600">Non-surgical treatment for uterine fibroids offering minimal cosmetic impact and rapid recovery.</p>
              </div>

              {/* Service 6 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 group">
                <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white smooth-transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Prostate Artery Embolization</h3>
                <p className="text-gray-600">Revolutionizing the treatment of enlarged prostate (BPH) through minimally invasive techniques.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-6">Need advice on a specific condition?</p>
              <a
                href="https://wa.me/910000000000"
                className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-teal smooth-transition shadow-xl text-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-teal mb-4">Dr. Kamlesh Talesra</h3>
            <p className="text-gray-300 text-sm">Expert Interventional Radiology services in Bhopal, providing modern, minimally invasive treatments for a faster, safer recovery.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-brand-teal transition">Home</a></li>
              <li><a href="#about" className="hover:text-brand-teal transition">About</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Bansal Hospital, Shahpura, Bhopal</p>
            <p className="text-gray-300 text-sm mb-4">WhatsApp: [Link Number]</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kamleshtalesra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/drkamlesh_talesra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Kamlesh Talesra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
