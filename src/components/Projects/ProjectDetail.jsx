import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const projectData = data[parseInt(id)];
        setProject(projectData);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000031] to-[#00002c] flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-700 border-t-[#ffe600]"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-4 border-[#ffe600] opacity-20"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000031] to-[#00002c] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/#projects")}
            className="btn bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black font-bold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Extract technology stack based on project
  const getTechStack = () => {
    const commonTech = {
      frontend: [
        "React.js",
        "Tailwind CSS",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "DaisyUI",
      ],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      tools: ["Git", "GitHub", "Firebase", "Vite", "npm/yarn"],
    };

    // Customize based on project name
    if (project.name.includes("TechWave")) {
      return {
        ...commonTech,
        frontend: [...commonTech.frontend, "React Router", "React Icons"],
        backend: [...commonTech.backend, "Mongoose", "bcrypt"],
      };
    } else if (project.name.includes("LuxeLair")) {
      return {
        ...commonTech,
        frontend: [
          ...commonTech.frontend,
          "React Context API",
          "React Toastify",
        ],
        backend: [...commonTech.backend, "Cookie Parser", "CORS"],
      };
    } else if (project.name.includes("NexGen")) {
      return {
        ...commonTech,
        frontend: [...commonTech.frontend, "React Hooks", "Swiper.js"],
        backend: [...commonTech.backend, "dotenv", "Morgan"],
      };
    }
    return commonTech;
  };

  const getFeatures = () => {
    // Customize features based on project
    if (project.name.includes("TechWave")) {
      return [
        "User Authentication with JWT",
        "Role-based Access Control (User, Moderator, Admin)",
        "Upvote/Downvote functionality",
        "Real-time product updates",
        "Responsive dashboard",
        "Secure API endpoints",
        "MongoDB database integration",
        "Modern UI/UX design",
      ];
    } else if (project.name.includes("LuxeLair")) {
      return [
        "Room browsing and filtering",
        "Real-time booking system",
        "User reviews and ratings",
        "Booking management dashboard",
        "Secure payment integration",
        "Email notifications",
        "Responsive design",
        "User authentication",
      ];
    } else if (project.name.includes("NexGen")) {
      return [
        "Browse products by brand",
        "Add/Update product functionality",
        "Shopping cart management",
        "Product detail pages",
        "Brand categorization",
        "User-friendly interface",
        "Secure data handling",
        "Responsive layout",
      ];
    }
    return [
      "User Authentication & Authorization",
      "Responsive Design for all devices",
      "Real-time data updates",
      "Secure API integration",
      "Admin dashboard",
      "Interactive UI/UX",
      "RESTful API",
      "Database optimization",
    ];
  };

  const techStack = getTechStack();
  const features = getFeatures();

  return (
    <div className="relative bg-gradient-to-b from-[#000031] to-[#00002c] min-h-screen py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#ffe600]/20 to-[#ff6b35]/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#4a00e0]/20 to-[#00d4ff]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/#projects")}
          className="group flex items-center gap-2 text-white hover:text-[#ffe600] transition-all duration-300 mb-8 animate-slide-in-left"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {project.name}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffe600] rounded-full"></div>
            <div className="w-2 h-2 bg-[#ffe600] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#ffe600] rounded-full"></div>
          </div>
        </div>

        {/* Project Image */}
        <div
          className="mb-12 animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] rounded-full flex items-center justify-center">
                  <FaLaptopCode className="text-black text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Project Overview
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Features Section */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full flex items-center justify-center">
                  <FaStar className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <FaCheckCircle className="text-[#ffe600] text-xl mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "800ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#10b981] to-[#f59e0b] rounded-full flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Technology Stack
                </h2>
              </div>
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h3 className="text-xl font-semibold text-[#ffe600] mb-3">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.frontend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-[#ffe600]/20 to-[#ff6b35]/20 border border-[#ffe600]/30 text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Backend */}
                <div>
                  <h3 className="text-xl font-semibold text-[#00d4ff] mb-3">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.backend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30 text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Tools */}
                <div>
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">
                    Tools & Deployment
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.tools.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-[#10b981]/20 to-[#f59e0b]/20 border border-[#10b981]/30 text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Links */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl sticky top-24 animate-fadeInUp"
              style={{ animationDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Project Links
              </h3>
              <div className="space-y-4">
                {/* Live Demo */}
                <a
                  href={project.links.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black font-bold px-6 py-3 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[#ffe600]/50 transition-all duration-300 relative overflow-hidden"
                >
                  <FaRocket className="text-xl group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                  <FaExternalLinkAlt className="ml-auto relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </a>

                {/* Client Code */}
                <a
                  href={project.links.client_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-bold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>Client Code</span>
                  <FaExternalLinkAlt className="ml-auto" />
                </a>

                {/* Server Code */}
                <a
                  href={project.links.server_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-bold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <FaServer className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>Server Code</span>
                  <FaExternalLinkAlt className="ml-auto" />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Project Info
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Category</p>
                  <p className="text-white font-semibold">
                    Full Stack Web Application
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Type</p>
                  <p className="text-white font-semibold">MERN Stack</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Status</p>
                  <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Live & Active
                  </span>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div
              className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "800ms" }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Project
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Like this project? Share it with others!
              </p>
              <button className="w-full bg-gradient-to-r from-[#ffe600] to-[#ff6b35] text-black font-bold px-6 py-3 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[#ffe600]/50 transition-all duration-300">
                Share Project
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div
          className="mt-12 bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fadeInUp"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b35] to-[#ff0080] rounded-full flex items-center justify-center">
              <FaCode className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              About This Project
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              This project was built using modern web technologies and follows
              industry best practices for clean code, scalability, and
              performance optimization.
            </p>
            <p>
              The application demonstrates expertise in full-stack development,
              including frontend design, backend API development, database
              management, and deployment strategies.
            </p>
            <p>
              Visit the GitHub repositories to explore the source code,
              understand the architecture, and see the implementation details.
              The live demo showcases the full functionality and user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
