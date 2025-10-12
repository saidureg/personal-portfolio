import { useEffect, useState } from "react";
import { FaLaptopCode, FaRocket, FaCode, FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      id="projects"
      className="relative bg-gradient-to-b from-[#000031] to-[#00002c] py-20 min-h-screen overflow-hidden"
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
              <FaLaptopCode className="text-[#ffe600] animate-float text-3xl md:text-4xl lg:text-5xl drop-shadow-xl" />
              <div className="absolute inset-0 animate-ping text-[#ffe600]/20">
                <FaLaptopCode className="text-3xl md:text-4xl lg:text-5xl" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              My{" "}
              <span className="text-[#ffe600] animate-glow drop-shadow-xl">
                Projects
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
            A showcase of my creative work and technical expertise, featuring
            innovative solutions and cutting-edge technologies
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-32">
            <div className="relative mb-8">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-700 border-t-[#ffe600]"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-4 border-[#ffe600] opacity-20"></div>
              <div className="absolute inset-2 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#ffe600]/20 to-[#ff6b35]/20"></div>
            </div>
            <div className="text-center">
              <h4 className="text-xl text-white font-semibold mb-2">
                Loading Amazing Projects
              </h4>
              <p className="text-gray-400">
                Preparing your portfolio showcase...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, idx) => (
              <div
                key={idx}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${idx * 200}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProjectCard project={project} index={idx} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
