import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, MapPin, Mail, ExternalLink, ChevronRight, Moon, Sun, QrCode, Users, BookOpen, Clock, Phone, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade-in').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "glassmorphism shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold gradient-text">ICDAIC</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("registration")}
                  className="nav-link"
                >
                  Register Now
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("tracks")}
                  className="nav-link"
                >
                  Tracks
                </button>
                <button
                  onClick={() => scrollToSection("dates")}
                  className="nav-link"
                >
                  Important Dates
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="nav-link"
                >
                  Location
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link"
                >
                  Contact
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-gray-100/20 dark:hover:bg-gray-800/20 transition-colors duration-300"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-gray-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden glassmorphism shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("registration")}
                  className="mobile-nav-link w-full text-left"
                >
                  Register Now
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="mobile-nav-link w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("tracks")}
                  className="mobile-nav-link w-full text-left"
                >
                  Tracks
                </button>
                <button
                  onClick={() => scrollToSection("dates")}
                  className="mobile-nav-link w-full text-left"
                >
                  Important Dates
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="mobile-nav-link w-full text-left"
                >
                  Location
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mobile-nav-link w-full text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="mobile-nav-link w-full text-left flex items-center"
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="tech-lines"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-8 float">
              ICDAIC'24
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 float">
              International Level Conference
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 float">
              April 06 2024
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Register now
              </a>
              <a
                href="#details"
                className="px-8 py-4 glassmorphism text-gray-800 dark:text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div
          id="about"
          className="section-fade-in py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
                About
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  ICDAIC'24 is a national level technical conference that is to
                  be held on April 06 2024. The event focuses on gathering the
                  various project ideas of people about data analytics and
                  intelligence computing in both online and offline mode.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  The event is a coordinated event that is to be held on both
                  online as well as offline mode. We welcome participants from
                  all over India. The participants can present their project
                  ideas through either offline mode or offline mode based on
                  their convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div
          id="registration"
          className="section-fade-in py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Registration
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    UG Students
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹500/-</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    PG Students & Research Scholars / Academicians
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹1000/-</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Industrialist
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹1500/-</p>
                </div>
                <a
                  href="https://forms.gle/dqVcdcFPZum14p3RA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </a>
              </div>
              <div className="flex justify-center">
                <div className="glassmorphism p-4 rounded-xl card-hover">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://forms.gle/dqVcdcFPZum14p3RA"
                    alt="Registration QR Code"
                    className="w-64 h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patrons Section */}
        <div
          id="patrons"
          className="section-fade-in py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Patrons
              </h2>
            </div>
            <div className="space-y-8">
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Chief Patron
                </h3>
                <p className="text-lg font-semibold text-yellow-500 mb-1">
                  Shri. M.V. Muthuramalingam
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Chairman, Velammal Institute of Technology
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Patron
                </h3>
                <p className="text-lg font-semibold text-yellow-500 mb-1">
                  Shri. M. V. M. Sasikumar
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Director, Velammal Education Trust
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Co-Patrons
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Shri. K. Razak
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Advisor, Velammal Institute of Technology
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Shri. M. Vaasu
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Advisor, Velammal Institute of Technology
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Dr. N. Balaji
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Principal, Velammal Institute of Technology
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Dr. S. Soundararajan
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Vice Principal, Velammal Institute of Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracks Section */}
        <div
          id="tracks"
          className="section-fade-in py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Conference Tracks
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Track I */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track I
                </h3>
                <ul className="space-y-4">
                  {[
                    "Data analytics and data engineering",
                    "Knowledge engineering",
                    "Data management",
                    "Business analytics",
                    "Big Data Analytics",
                    "Web data management and development",
                  ].map((track, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300 transition-all duration-300 hover:translate-x-2"
                    >
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                      {track}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Track II */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track II
                </h3>
                <ul className="space-y-4">
                  {[
                    "Deep learning in autonomous systems",
                    "Intelligent process control",
                    "Autonomous Vehicles",
                    "Cyber physical system",
                    "Smart energy system",
                    "Half healing network",
                    "Automatic customer service",
                    "Autonomous underwater Vehicles",
                  ].map((track, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300 transition-all duration-300 hover:translate-x-2"
                    >
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                      {track}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Dates Section */}
        <div
          id="dates"
          className="section-fade-in py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Important Dates
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Abstract submission", date: "15/03/2024" },
                { title: "Full paper submission", date: "18/03/2024" },
                { title: "Intimation of acceptance", date: "20/03/2024" },
                {
                  title: "Camera ready paper for registration",
                  date: "26/03/2024",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-xl p-6 text-center card-hover"
                >
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="gradient-text font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div
          id="location"
          className="section-fade-in py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Location
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-4">
                  Venue
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Velammal Institute of Technology
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Panchetti, Chennai - Kolkata Hwy, Tamil Nadu 601204
                  </p>
                  <a
                    href="https://maps.app.goo.gl/WefYavNhxPj84kLC9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="glassmorphism rounded-xl overflow-hidden card-hover h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4444.0962368136!2d80.14929769999999!3d13.2944135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527efa08e09967%3A0xc1b057bb21ab2483!2sVelammal%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1740544332352!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="section-fade-in py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Contact Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      +91 9876543210
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      contact@icdaic.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      www.icdaic.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Download Brochure
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Paper Submission Guidelines
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Registration Process
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;