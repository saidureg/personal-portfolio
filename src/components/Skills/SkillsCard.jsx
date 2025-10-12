import PropTypes from "prop-types";
import { useState } from "react";

const SkillsCard = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Beginner";
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return "text-green-400";
    if (proficiency >= 80) return "text-blue-400";
    if (proficiency >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  const getContrastColor = (hexColor) => {
    // Convert hex to RGB
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Color palette for better visual appeal
    const colorPalette = {
      light: "#1a1a2e", // Dark blue-gray for light backgrounds
      medium: "#ffffff", // White for medium backgrounds
      dark: "#ffe600", // Yellow accent for dark backgrounds
      veryDark: "#00d4ff", // Cyan for very dark backgrounds
    };

    // Return colors based on luminance with better visual hierarchy
    if (luminance > 0.7) {
      return colorPalette.light;
    } else if (luminance > 0.4) {
      return colorPalette.medium;
    } else if (luminance > 0.15) {
      return colorPalette.dark;
    } else {
      return colorPalette.veryDark;
    }
  };

  return (
    <div
      className="group relative text-center text-white bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-3xl transition-all duration-700 transform hover:scale-105 cursor-pointer border border-gray-600/40 hover:border-[#ffe600]/60 overflow-hidden shadow-lg hover:-translate-y-1 hover:z-10"
      style={{
        animationDelay: `${index * 100}ms`,
        background: isHovered
          ? `linear-gradient(135deg, ${data?.color}15, rgba(0,0,0,0.9))`
          : `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))`,
        boxShadow: isHovered
          ? `0 0 40px ${data?.color}20, 0 10px 30px rgba(0,0,0,0.3)`
          : `0 4px 20px rgba(0,0,0,0.2), 0 0 10px ${data?.color}10`,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowDetails(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDetails(false);
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${data?.color}15, transparent)`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          boxShadow: `0 0 30px ${data?.color}40`,
        }}
      />

      {/* Icon container with enhanced styling */}
      <div className="relative z-10 h-20 mb-6 flex items-center justify-center">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
          }`}
          style={{
            background: `linear-gradient(135deg, ${data?.color}20, ${data?.color}10)`,
            border: `2px solid ${data?.color}30`,
            boxShadow: isHovered
              ? `0 0 30px ${data?.color}40`
              : `0 0 10px ${data?.color}20`,
          }}
        >
          <img
            className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
            src={data?.icon}
            alt={data?.name}
            style={{
              filter: isHovered
                ? "drop-shadow(0 0 15px rgba(255,255,255,0.4)) brightness(1.2)"
                : "drop-shadow(0 0 5px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>

      {/* Skill name */}
      <h2 className="relative z-10 text-lg font-bold mb-3 transition-colors duration-300 text-white group-hover:text-[#ffe600]">
        {data?.name}
      </h2>

      {/* Category badge */}
      <div className="relative z-10 mb-4">
        <span
          className="text-xs px-4 py-2 rounded-full font-bold backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${data?.color}60, ${data?.color}40)`,
            color: getContrastColor(data?.color),
            border: `2px solid ${data?.color}80`,
            boxShadow: `0 0 20px ${data?.color}50, inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3)`,
            textShadow: (() => {
              const textColor = getContrastColor(data?.color);
              if (textColor === "#ffffff") {
                return "0 1px 3px rgba(0,0,0,0.8)";
              } else if (textColor === "#ffe600") {
                return "0 1px 3px rgba(0,0,0,0.7)";
              } else if (textColor === "#00d4ff") {
                return "0 1px 3px rgba(0,0,0,0.6)";
              } else {
                return "0 1px 3px rgba(255,255,255,0.4)";
              }
            })(),
          }}
        >
          {data?.category}
        </span>
      </div>

      {/* Hover indicator */}
      <div className="relative z-10 mb-2">
        <div className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
          <span className="font-medium">Hover for details</span>
          <div className="w-1.5 h-1.5 bg-[#ffe600] rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Proficiency level - shown on hover with absolute positioning */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 transition-all duration-500 transform ${
          showDetails
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        }`}
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.9) 100%)`,
          padding: "1.5rem 1rem 1rem 1rem",
          borderRadius: "0 0 1.5rem 1.5rem",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-sm mb-3">
          <span
            className={`font-bold ${getProficiencyColor(data?.proficiency)}`}
          >
            {getProficiencyLevel(data?.proficiency)}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full rounded-full transition-all duration-1500 ease-out relative"
            style={{
              width: `${data?.proficiency}%`,
              background: `linear-gradient(90deg, ${data?.color}, ${data?.color}CC)`,
              boxShadow: `0 0 15px ${data?.color}60`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Percentage */}
        <div className="text-sm text-gray-300 mt-2 font-semibold">
          {data?.proficiency}%
        </div>
      </div>

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${data?.color}08, transparent)`,
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="shimmer absolute inset-0 rounded-3xl"></div>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default SkillsCard;
