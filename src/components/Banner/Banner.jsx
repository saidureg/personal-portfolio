import hero from "../../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import BgAnimation from "./BgAnimation/BgAnimation";
const Banner = () => {
  return (
    <div id="home" className="bg-neutral text-neutral-content">
      <div className="hero lg:h-[80vh]">
        <BgAnimation />
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={hero}
            alt="Hero image"
            className="w-[300px] h-[280px] lg:h-[500px] lg:w-[500px] rounded-full shadow-2xl"
          />
          <div className="space-y-5 lg:px-5">
            <h3 className="text-5xl font-semibold mb-3">Hi, I am</h3>
            <span className="text-2xl text-orange-700 font-medium">
              <TypeAnimation
                sequence={[
                  "Saidur Rahaman",
                  1000,
                  "a Web Developer",
                  1000,
                  "a Front End Developer",
                  1000,
                  "a MERN Stack Developer",
                  1000,
                  "a React Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
            <p className="lg:w-3/4 text-gray-400">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
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
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
            <div>
              <button className="btn btn-outline btn-secondary mr-4">
                Hire Me
              </button>
              <button className="btn btn-primary">
                Download Resume <FaCloudDownloadAlt className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
