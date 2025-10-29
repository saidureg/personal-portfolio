import hero from "../../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import BgAnimation from "./BgAnimation/BgAnimation";
const Banner = () => {
  const driveFileId = "1RJv0yJfPmz-uHH13YiSlKRyGdJHhEAKm";
  const resumeLink = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const handleDownload = () => {
    window.location.href = resumeLink;
  };
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-[#000020]/80 via-[#000030]/70 to-[#000040]/60 text-neutral-content overflow-hidden backdrop-blur-sm"
    >
      <div className="hero lg:h-[90vh] pt-12">
        <BgAnimation />
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="relative group">
            <img
              src={hero}
              alt="Hero image"
              className="w-[300px] lg:w-[700px] rounded-full shadow-2xl border-4 border-white/10 group-hover:border-[#ffe600]/50 group-hover:scale-105 transition-all duration-500 animate-fadeInUp"
            />
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffe600] via-[#ff6b35] to-[#ffe600] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse -z-10"></div>
            {/* Animated Border Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#ffe600]/20 animate-ping"></div>
          </div>
          <div className="space-y-5 lg:px-5">
            <h3 className="text-5xl font-bold mb-3 animate-slide-in-left">
              <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
                Hi, I am
              </span>
              <br />
              <span className="text-3xl md:text-4xl bg-gradient-to-r from-[#ffe600] via-[#ff6b35] to-[#ffe600] bg-clip-text text-transparent animate-glow drop-shadow-xl">
                Saidur Rahaman
              </span>
            </h3>
            <h4
              className="text-xl md:text-5xl font-medium animate-slide-in-left"
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-gray-300">I am a</span>
              <span className="text-lg md:text-2xl font-bold">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "Front End Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{
                    fontSize: "2em",
                    marginLeft: "1rem",
                    display: "inline-block",
                  }}
                  className="bg-gradient-to-r from-[#ffe600] to-[#ff6b35] bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </span>
            </h4>

            <p
              className="lg:w-3/4 text-gray-300 leading-relaxed animate-slide-in-left"
              style={{ animationDelay: "400ms" }}
            >
              I am a motivated and versatile person, always eager to take on new
              challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            <div
              className="flex items-center gap-3 animate-slide-in-left"
              style={{ animationDelay: "600ms" }}
            >
              <a
                href="https://github.com/saidureg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#333] to-[#666] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-gray-500/50 transition-all duration-300 group"
              >
                <FaGithub className="text-2xl group-hover:animate-bounce" />
              </a>
              <a
                href="https://www.linkedin.com/in/rsaidur/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group"
              >
                <FaLinkedin className="text-2xl group-hover:animate-bounce" />
              </a>
              <a
                href=""
                className="w-12 h-12 bg-gradient-to-r from-[#0088cc] to-[#0099dd] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <FaTelegram className="text-2xl group-hover:animate-bounce" />
              </a>
              <a
                href=""
                className="w-12 h-12 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 group"
              >
                <FaInstagram className="text-2xl group-hover:animate-bounce" />
              </a>
            </div>
            <div
              className="flex items-center gap-4 animate-slide-in-left"
              style={{ animationDelay: "800ms" }}
            >
              <a href="#contact">
                <button className="group btn btn-outline border-2 border-[#ffe600] hover:bg-gradient-to-r hover:from-[#ffe600] hover:to-[#ff6b35] hover:border-transparent text-white hover:text-black md:text-xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#ffe600]/50 flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Hire Me</span>
                  <MdKeyboardArrowRight className="text-2xl relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </a>
              <button
                onClick={handleDownload}
                className="group btn bg-gradient-to-r from-[#ffe600] to-[#ff6b35] border-none text-black text-xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-[#ffe600]/50 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Resume</span>
                <FaCloudDownloadAlt className="md:text-2xl relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
