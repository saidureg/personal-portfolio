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
  const driveFileId = "1s2SEOBabnAo_tXxoTApf13oEupsm1mVr";
  const resumeLink = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const handleDownload = () => {
    window.location.href = resumeLink;
  };
  return (
    <div id="home" className="bg-neutral text-neutral-content">
      <div className="hero lg:h-[90vh] pt-12">
        <BgAnimation />
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={hero}
            alt="Hero image"
            className="w-[300px] h-[280px] lg:h-[500px] lg:w-[500px] rounded-full shadow-2xl"
          />
          <div className="space-y-5 lg:px-5">
            <h3 className="text-5xl font-semibold mb-3">
              Hi, I am <br />
              <span className="text-3xl md:text-4xl text-[#854ce6]">
                Saidur Rahaman
              </span>{" "}
            </h3>
            <h4 className="text-xl md:text-5xl font-medium">
              I am a
              <span className="text-lg md:text-2xl text-orange-700 font-medium">
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
                  repeat={Infinity}
                />
              </span>
            </h4>

            <p className="lg:w-3/4 text-gray-400">
              I am a motivated and versatile person, always eager to take on new
              challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/saidureg">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/rsaidur/">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="">
                <FaTelegram className="text-2xl" />
              </a>
              <a href="">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#contact">
                <button className="btn btn-outline btn-secondary md:text-xl">
                  Hire Me <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </a>
              <button
                onClick={handleDownload}
                className="btn btn-primary text-xl"
              >
                Resume <FaCloudDownloadAlt className="md:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
