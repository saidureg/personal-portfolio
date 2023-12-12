import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#222a35] text-white rounded">
      <div>
        <p className="text-[#854ce6] text-3xl font-semibold mb-3">
          Saidur Rahaman
        </p>
        <nav className="flex flex-wrap md:grid md:grid-flow-col gap-4 md:text-xl">
          <a href="#home" className="link link-hover">
            About
          </a>
          <a href="#skills" className="link link-hover">
            Skills
          </a>
          <a href="#experience" className="link link-hover">
            Experience
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#education" className="link link-hover">
            Education
          </a>
        </nav>
      </div>

      <nav>
        <div className="grid grid-flow-col gap-5">
          <a href="https://github.com/saidureg">
            <FaGithub className="text-2xl md:text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/rsaidur/">
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
          <a href="">
            <FaTelegram className="text-2xl md:text-3xl" />
          </a>
          <a href="">
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2023 Saidur Rahaman. All right reserved. </p>
      </aside>
    </footer>
  );
};

export default Footer;
