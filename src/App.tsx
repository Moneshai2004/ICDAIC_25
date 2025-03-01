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
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="tech-lines"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-8">
              ICDAIC'25
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Second International Conference on Data Analytics and Intelligence
              Computing
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
              April 9, 2025 | Mode: Online / Offline
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#registration"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Register Now
              </a>
              <a
                href="#about"
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
                About ICDAIC'25
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Second International Conference on Data Analytics and
                    Intelligence Computing (ICDAIC'25)
                  </span>{" "}
                  will be held on{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    April 9, 2025
                  </span>
                  . This conference focuses on the latest advancements in{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Data Analytics
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Artificial Intelligence
                  </span>
                  , and{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Intelligence Computing
                  </span>
                  .
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  ICDAIC'25 aims to bring together experts, researchers,
                  industry professionals, and students to explore and discuss
                  the emerging trends in{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Artificial Intelligence
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Machine Learning
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Data Science
                  </span>
                  , and related fields. The event will be conducted in both{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    online
                  </span>{" "}
                  and{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    offline
                  </span>{" "}
                  formats, offering global participation opportunities.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This conference will feature multiple tracks, covering key
                  topics in the fields of{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Artificial Intelligence
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Data Science
                  </span>
                  , and{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Cyber-Physical Systems
                  </span>
                  , as well as{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Industry 6.0
                  </span>{" "}
                  and its integration with AI and Data Science. The goal is to
                  create an inclusive environment where participants can share
                  their latest research, ideas, and innovations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We invite students, researchers, academicians, and industry
                  experts to submit their papers and innovative ideas. Extended
                  papers will be recommended for inclusion in{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Scopus-indexed journals
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    UGC Care Journals
                  </span>
                  ,{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Book Chapters
                  </span>
                  , and{" "}
                  <span className="text-gray-900 dark:text-gray-200">
                    Book Series
                  </span>
                  , subject to quality review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        {/* Registration Section */}
        <div
          id="registration"
          className="section-fade-in py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Registration Fees
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* UG Students */}
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    UG Students
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹750/-</p>
                </div>

                {/* PG Students / Research Scholars / Academicians */}
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    PG Students / Research Scholars / Academicians
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹1500/-</p>
                </div>

                {/* Industrialist */}
                <div className="glassmorphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Industrialist
                  </h3>
                  <p className="text-3xl font-bold gradient-text">₹1000/-</p>
                </div>

                {/* Register Now Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc5QCSk51yiPjwsgU_bHngTJ9Gft4iz7ph2VKG826sAllHPFg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </a>
              </div>

              {/* QR Code for PhonePe */}
              <div className="flex justify-center">
                <div className="glassmorphism p-4 rounded-xl card-hover">
                  <img
                    src="/images/qrcode.jpeg"
                    alt="PhonePe QR Code"
                    className="w-64 h-64"
                  />
                  <p className="text-center mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Scan & Pay Using PhonePe App
                  </p>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Deverashetty Chandra Shekar
                  </p>
                </div>
              </div>

              {/* After Payment Message */}
              <div className="text-center mt-8">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  After completing your payment, please{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc5QCSk51yiPjwsgU_bHngTJ9Gft4iz7ph2VKG826sAllHPFg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    fill out the registration form
                  </a>{" "}
                  to complete your registration.
                </p>
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
              {/* Chief Patron */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Chief Patron
                </h3>
                <p className="text-lg font-semibold text-yellow-500 mb-1">
                  Shri. M.V. Muthuramalingam
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Chairman, Velammal Educational Trust
                </p>
              </div>

              {/* Patron */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Patron
                </h3>
                <p className="text-lg font-semibold text-yellow-500 mb-1">
                  Shri. M. V. M. Sasikumar
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Director, Velammal Educational Trust
                </p>
              </div>

              {/* Co-Patrons */}
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

              {/* Convener */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Convener
                </h3>
                <p className="text-lg font-semibold text-yellow-500 mb-1">
                  Dr. S. PadmaPriya
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Professor and Head, Dept. of Artificial Intelligence and Data
                  Science
                </p>
              </div>

              {/* Coordinators */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  Coordinators
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Mrs. K. Sudha
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Assistant Professor, Dept. of Artificial Intelligence and
                      Data Science
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-yellow-500 mb-1">
                      Mr. K. Dinesh Kumar
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Assistant Professor, Dept. of Artificial Intelligence and
                      Data Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracks Section */}
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
              {/* Track I - Artificial Intelligence */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track I - Artificial Intelligence
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>Multi Modal & AI Models</li>
                  <li>Responsible AI</li>
                  <li>Ethical AI</li>
                  <li>Agentic AI</li>
                  <li>Small LM’s</li>
                  <li>AI in Healthcare</li>
                </ul>
              </div>

              {/* Track II - Data Science */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track II - Data Science
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>Explainable AI</li>
                  <li>Edge Computing & IoT</li>
                  <li>Augmented Analytics</li>
                  <li>Data Privacy and Security</li>
                  <li>Advancements in Data Governance</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>

              {/* Track III - Cyber Physical Systems */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track III - Cyber Physical Systems
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>AI Powered Cyber Security Enhancements</li>
                  <li>Quantum Computing</li>
                  <li>Cloud Security</li>
                  <li>Zero Trust Security Framework</li>
                  <li>Cyber Attack Detection and Mitigation</li>
                  <li>Fault Tolerant Systems</li>
                </ul>
              </div>

              {/* Track IV - Industry 6.0 */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Track IV - Industry 6.0
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>Hyper Connected Systems</li>
                  <li>Autonomous Supply Chains</li>
                  <li>Digital Twins</li>
                  <li>Swarm Robotics</li>
                  <li>Predictive Maintenance</li>
                  <li>Smart Manufacturing Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Dates Section */}
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
              {/* Abstract Submission */}
              <div className="glassmorphism rounded-xl p-6 text-center card-hover">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Abstract Submission
                </h3>
                <p className="gradient-text font-semibold">15/03/2025</p>
              </div>

              {/* Full Paper Submission */}
              <div className="glassmorphism rounded-xl p-6 text-center card-hover">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Full Paper Submission
                </h3>
                <p className="gradient-text font-semibold">18/03/2025</p>
              </div>

              {/* Intimation of Acceptance */}
              <div className="glassmorphism rounded-xl p-6 text-center card-hover">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Intimation of Acceptance
                </h3>
                <p className="gradient-text font-semibold">20/03/2025</p>
              </div>

              {/* Camera Ready Paper for Registration */}
              <div className="glassmorphism rounded-xl p-6 text-center card-hover">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Camera Ready Paper for Registration
                </h3>
                <p className="gradient-text font-semibold">23/03/2025</p>
              </div>
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

        {/* Contact Section */}
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
              {/* Contact Details */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      +91 9551333622, +91 9710845174
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      icdic@velammalitech.edu.in
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">
                      www.velammalitech.edu.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glassmorphism rounded-xl p-8 card-hover">
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href="/images/Grey_and_Green_Modern_Plant_Studio_Trifold_Brochure_2025.pdf" // Correct the file name if necessary
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    download="ICDAIC_Brochure.pdf" // File will be downloaded with this name
                  >
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Download Brochure
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