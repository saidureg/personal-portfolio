import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaRocket,
  FaGithub,
  FaCode,
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const getProjectColor = (index) => {
    const colors = [
      "#ffe600", // Bright yellow
      "#00d4ff", // Cyan blue
      "#ff6b35", // Orange
      "#8b5cf6", // Purple
      "#10b981", // Emerald green
      "#f59e0b", // Amber
      "#ef4444", // Red
      "#06b6d4", // Sky blue
    ];
    return colors[index % colors.length];
  };

  const projectColor = getProjectColor(index);

  return (
    <div className="group relative perspective-1000">
      <div
        className="project-card relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-110 hover:-translate-y-6 hover:rotate-x-3 cursor-pointer shadow-2xl animate-project-float"
        style={{
          animationDelay: `${index * 200}ms`,
          transformStyle: "preserve-3d",
          background: `linear-gradient(135deg, ${projectColor}15, rgba(0,0,0,0.05))`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img
            className="project-image h-full w-full object-cover transition-all duration-500 group-hover:scale-115 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150"
            src={project?.image}
            alt={project?.name}
          />

          {/* Project Name - Always Visible */}
          <div className="absolute bottom-0 left-0 right-0 h-[20%] flex items-center justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center px-4 py-2 drop-shadow-2xl bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl group-hover:scale-105 transition-transform duration-300">
              {project?.name}
            </h3>
          </div>

          {/* Hover Overlay - Covers Bottom 80% */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/98 via-black/85 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div
            className="absolute inset-x-0 bottom-0 h-[80%] opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${projectColor}30, ${projectColor}15, transparent)`,
            }}
          />

          {/* Animated Border */}
          <div
            className="absolute inset-0 border-2 border-transparent group-hover:border-white/60 rounded-3xl transition-all duration-500"
            style={{
              background: `linear-gradient(45deg, ${projectColor}40, transparent, ${projectColor}40)`,
              backgroundSize: "200% 200%",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />

          {/* Floating Tech Icons */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-[#ffe600] to-[#ff6b35] rounded-full animate-pulse shadow-lg border border-white/30 group-hover:scale-125 transition-transform duration-300"></div>
              <div
                className="w-2.5 h-2.5 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full animate-pulse shadow-lg border border-white/30 group-hover:scale-125 transition-transform duration-300"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2.5 h-2.5 bg-gradient-to-r from-[#10b981] to-[#f59e0b] rounded-full animate-pulse shadow-lg border border-white/30 group-hover:scale-125 transition-transform duration-300"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Project Badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-3 group-hover:translate-y-0">
            <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs font-bold tracking-wide">
                FEATURED
              </span>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${projectColor}25, transparent 60%)`,
            }}
          />
        </div>

        {/* Content Card - Shows on Hover */}
        <div
          className="absolute inset-x-0 bottom-0 h-[80%] p-5 bg-gradient-to-t from-black/98 to-black/90 backdrop-blur-2xl border-t border-white/20 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-b-3xl"
          style={{
            background: isHovered
              ? `linear-gradient(to top, ${projectColor}25, rgba(0,0,0,0.95))`
              : `linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.9))`,
            boxShadow: isHovered
              ? `0 -20px 40px rgba(0,0,0,0.7), 0 0 30px ${projectColor}40, inset 0 1px 0 rgba(255,255,255,0.2)`
              : "0 -10px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Project Description */}
          <p className="text-gray-100 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 font-light line-clamp-3">
            {project?.desc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <button
              onClick={() => openInNewTab(project?.links?.view)}
              className="btn-primary-project group/btn text-xs px-3 py-2 font-semibold hover:scale-105 transition-transform duration-300"
            >
              <FaRocket className="text-xs group-hover/btn:animate-bounce" />
              <span>Live Demo</span>
            </button>

            <button
              onClick={() => openInNewTab(project?.links?.client_code)}
              className="btn-secondary-project group/btn text-xs px-3 py-2 font-medium hover:scale-105 transition-transform duration-300"
            >
              <FaGithub className="text-xs group-hover/btn:scale-110 transition-transform duration-300" />
              <span>Client</span>
            </button>

            <button
              onClick={() => openInNewTab(project?.links?.server_code)}
              className="btn-secondary-project group/btn text-xs px-3 py-2 font-medium hover:scale-105 transition-transform duration-300"
            >
              <FaCode className="text-xs group-hover/btn:scale-110 transition-transform duration-300" />
              <span>Server</span>
            </button>
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 text-white bg-gradient-to-r from-black/80 to-black/60 px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <FaEye className="text-sm animate-pulse" />
            <span className="text-sm font-bold tracking-wide">
              View Details
            </span>
          </div>
        </div>

        {/* Enhanced Glow Effect */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 40px ${projectColor}50, 0 0 80px ${projectColor}40, 0 0 120px ${projectColor}30`,
          }}
        />

        {/* Additional Glow Ring */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 15px ${projectColor}30, inset 0 0 30px ${projectColor}20`,
          }}
        />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
