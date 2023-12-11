import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  const redirectToGithub = () => {
    window.location.href = "https://github.com/saidureg";
  };
  const navItems = (
    <>
      <li>
        <a
          href="#home"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-14 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-14 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#skills"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-12 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[100px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[72px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[92px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
        >
          Education
        </a>
      </li>
    </>
  );
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="flex items-center gap-1 text-2xl">
            <DiCssdeck className="text-5xl" /> Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={redirectToGithub}
            className="px-5 py-3 border border-primary rounded-2xl btn-outline text-white transition-all duration-700 ease-in-out hover:btn-primary"
          >
            Github Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
