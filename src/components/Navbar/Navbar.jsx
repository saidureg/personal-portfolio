import { DiCssdeck } from "react-icons/di";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const redirectToResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1RJv0yJfPmz-uHH13YiSlKRyGdJHhEAKm/view?usp=drive_link";
  };
  const navItems = (
    <>
      <li>
        <a
          href="#home"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-[#ffe600] after:to-[#ff6b35] after:w-14 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right hover:text-[#ffe600] transition-colors duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-[#ffe600] after:to-[#ff6b35] after:w-12 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right hover:text-[#ffe600] transition-colors duration-300"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-[#ffe600] after:to-[#ff6b35] after:w-[100px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right hover:text-[#ffe600] transition-colors duration-300"
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-[#ffe600] after:to-[#ff6b35] after:w-[72px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right hover:text-[#ffe600] transition-colors duration-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-[#ffe600] after:to-[#ff6b35] after:w-[92px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right hover:text-[#ffe600] transition-colors duration-300"
        >
          Education
        </a>
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-[#000030] via-[#000040] to-[#000030] text-neutral-content shadow-lg shadow-[#ffe600]/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar fixed z-20 max-w-screen-xl backdrop-blur-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="px-2 lg:hidden hover:text-[#ffe600] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-gradient-to-br from-[#000030] to-[#000050] rounded-box w-52 border border-white/10"
              >
                {navItems}
              </ul>
            </div>
            <a className="flex items-center gap-1 text-xl md:text-2xl font-bold group cursor-pointer">
              <DiCssdeck className="text-3xl md:text-5xl text-[#ffe600] group-hover:rotate-180 transition-transform duration-500 animate-pulse" />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-[#ffe600] group-hover:to-[#ff6b35] transition-all duration-300">
                Portfolio
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <button
              onClick={redirectToResume}
              className="group px-2 md:px-6 py-2 md:py-3 border-2 border-[#ffe600] rounded-2xl text-white font-semibold transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#ffe600] hover:to-[#ff6b35] hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[#ffe600]/50 flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Check Resume</span>
              <FaDownload className="relative z-10 group-hover:animate-bounce" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
