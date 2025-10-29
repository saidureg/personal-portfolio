import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#00002c]/60 to-[#000020]/80 text-white overflow-hidden backdrop-blur-sm">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#ffe600]/10 to-[#ff6b35]/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-[#4a00e0]/10 to-[#00d4ff]/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,230,0,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4 animate-fadeInUp">
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-[#ffe600] text-2xl animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Saidur Rahaman
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating beautiful and
              functional web applications. Let's build something amazing
              together!
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-[#ffe600]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-4 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#ffe600] to-[#ff6b35] rounded-full"></div>
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="group text-gray-400 hover:text-[#ffe600] transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-[#ffe600] transition-all duration-300"></span>
                About
              </a>
              <a
                href="#skills"
                className="group text-gray-400 hover:text-[#ffe600] transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-[#ffe600] transition-all duration-300"></span>
                Skills
              </a>
              <a
                href="#experience"
                className="group text-gray-400 hover:text-[#ffe600] transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-[#ffe600] transition-all duration-300"></span>
                Experience
              </a>
              <a
                href="#projects"
                className="group text-gray-400 hover:text-[#ffe600] transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-[#ffe600] transition-all duration-300"></span>
                Projects
              </a>
              <a
                href="#education"
                className="group text-gray-400 hover:text-[#ffe600] transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-[#ffe600] transition-all duration-300"></span>
                Education
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-4 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#ffe600] to-[#ff6b35] rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:saidureg@gmail.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-[#ffe600] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#ffe600]/20 to-[#ff6b35]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-[#ffe600]" />
                </div>
                <span className="text-sm">saidureg@gmail.com</span>
              </a>
              <a
                href="#contact"
                className="inline-block mt-4 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black font-semibold px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#ffe600]/50 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="space-y-4 animate-fadeInUp"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#ffe600] to-[#ff6b35] rounded-full"></div>
              Follow Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/saidureg"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-[#333] to-[#666] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-gray-500/50 transition-all duration-300"
              >
                <FaGithub className="text-white text-xl group-hover:animate-bounce" />
              </a>
              <a
                href="https://www.linkedin.com/in/rsaidur/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaLinkedin className="text-white text-xl group-hover:animate-bounce" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-[#ffe600] to-[#ff6b35] w-16 h-0.5 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p className="flex items-center gap-2">
            © {currentYear} Saidur Rahaman. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by
            Saidur Rahaman
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[#ffe600] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-[#ffe600] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[#ffe600]/50 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
