import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  FaHeadset,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_d5xdis6",
        "template_c0g64fh",
        form.current,
        "S5VbJD8BVfsxeLEfc"
      )
      .then(
        () => {
          e.target.reset();
          toast.success("Message Sent Successfully! 🎉", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative bg-gradient-to-b from-[#000031]/70 to-[#00002c]/60 py-20 min-h-screen overflow-hidden backdrop-blur-sm"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#ffe600]/20 to-[#ff6b35]/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#4a00e0]/20 to-[#00d4ff]/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-[#ff0080]/20 to-[#ffe600]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
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

      {/* Header Section */}
      <div className="relative text-center pb-12 px-4 z-10">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold flex items-center justify-center gap-4 mb-6 animate-slide-in-left">
            <div className="relative">
              <FaHeadset className="text-[#ffe600] animate-float text-3xl md:text-4xl lg:text-5xl drop-shadow-xl" />
              <div className="absolute inset-0 animate-ping text-[#ffe600]/20">
                <FaHeadset className="text-3xl md:text-4xl lg:text-5xl" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Get In{" "}
              <span className="text-[#ffe600] animate-glow drop-shadow-xl">
                Touch
              </span>
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#ffe600] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#ffe600] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#ffe600] rounded-full"></div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-right leading-relaxed font-light">
            Feel free to reach out to me for any questions or opportunities! I'd
            love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6 animate-fadeInUp">
            {/* Email Card */}
            <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#ffe600]/10 to-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-black text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Email</h3>
                    <p className="text-gray-400 text-sm">Send me a message</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">saidureg@gmail.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#00d4ff]/10 to-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Location</h3>
                    <p className="text-gray-400 text-sm">Where I'm based</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#10b981]/10 to-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-white font-bold text-lg mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/rsaidur/"
                    className="w-10 h-10 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <FaLinkedin className="text-white text-lg" />
                  </a>
                  <a
                    href="https://github.com/saidureg"
                    className="w-10 h-10 bg-gradient-to-r from-[#333] to-[#666] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-[#1da1f2] to-[#0c85d0] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <FaTwitter className="text-white text-lg" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative rounded-3xl overflow-hidden transition-all duration-500">
              <div className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <MdRocketLaunch className="text-[#ffe600] text-3xl animate-bounce" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Send Me A Message
                  </h3>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className=" text-white font-semibold mb-2 flex items-center gap-2">
                      <FaUser className="text-[#ffe600]" />
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        focusedField === "name"
                          ? "border-[#ffe600] shadow-lg shadow-[#ffe600]/20"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffe600] transition-all duration-300`}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="text-white font-semibold mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-[#ffe600]" />
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        focusedField === "email"
                          ? "border-[#ffe600] shadow-lg shadow-[#ffe600]/20"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffe600] transition-all duration-300`}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label className="text-white font-semibold mb-2 flex items-center gap-2">
                      <FaPhone className="text-[#ffe600]" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      name="phone"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        focusedField === "phone"
                          ? "border-[#ffe600] shadow-lg shadow-[#ffe600]/20"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffe600] transition-all duration-300`}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="text-white font-semibold mb-2 flex items-center gap-2">
                      <FaPaperPlane className="text-[#ffe600]" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        focusedField === "message"
                          ? "border-[#ffe600] shadow-lg shadow-[#ffe600]/20"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffe600] transition-all duration-300 resize-none`}
                      rows="6"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn w-full bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-[#ffe600]/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
