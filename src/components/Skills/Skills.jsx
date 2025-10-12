import { useEffect, useState } from "react";
import SkillsCard from "./SkillsCard";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("skills.json")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-[#000031] to-[#00002c] py-20 w-full min-h-screen"
    >
      {/* Header Section */}
      <div className="text-center pb-16 px-4">
        <h3 className="text-3xl md:text-5xl text-white font-bold flex items-center justify-center gap-4 mb-6 animate-slide-in-left">
          <FaLaptopCode className="text-[#ffe600] animate-float text-4xl md:text-6xl" />
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills &{" "}
            <span className="text-[#ffe600] animate-glow">Abilities</span>
          </span>
        </h3>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-right leading-relaxed">
          A showcase of my technical expertise and proficiency across modern
          technologies
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-[#ffe600]"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-[#ffe600] opacity-20"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {skills.map((data, idx) => (
              <div
                key={idx}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${idx * 80}ms`,
                  animationFillMode: "both",
                }}
              >
                <SkillsCard data={data} index={idx} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;
