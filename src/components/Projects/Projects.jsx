import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="bg-gradient-to-b from-[#000031] to-[#00002c]">
      <div className="px-10 pt-10 pb-20 max-w-screen-xl mx-auto">
        <div className="text-white text-center text-3xl font-bold mb-8">
          <h2 className="flex items-center justify-center gap-2">
            {" "}
            <FaLaptopCode /> My <span className="text-[#ffd900]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects?.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
