import { RiGraduationCapFill } from "react-icons/ri";
import { FaUniversity, FaCode, FaCertificate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Green University of Bangladesh, Dhaka",
      period: "Feb 2021 - Sep 2024",
      icon: <FaUniversity />,
      color: "#ffe600",
      description:
        "Comprehensive study of computer science fundamentals, software engineering, data structures, algorithms, and modern web technologies.",
      achievements: [
        "CGPA: 3.85/4.00",
        "Dean's List",
        "Final Year Project: E-commerce Platform",
      ],
    },
    {
      id: 2,
      degree: "Complete Web Development Course With Jhankar Mahbub",
      institution: "Programming Hero",
      period: "Jul 2023 - Dec 2023",
      icon: <FaCode />,
      color: "#4a00e0",
      description:
        "Intensive full-stack web development course covering modern technologies and best practices in web development.",
      achievements: [
        "MERN Stack Mastery",
        "Project-Based Learning",
        "Industry Mentorship",
      ],
    },
    {
      id: 3,
      degree: "Diploma in Engineering of Computer Technology",
      institution: "Chittagong Polytechnic Institute, Chittagong",
      period: "Jun 2015 - Jul 2019",
      icon: <FaCertificate />,
      color: "#ff6b35",
      description:
        "Foundation in computer technology, hardware, software, and basic programming concepts.",
      achievements: [
        "CGPA: 3.75/4.00",
        "Technical Skills Development",
        "Practical Training",
      ],
    },
  ];

  return (
    <div
      id="education"
      className="bg-gradient-to-b from-[#00002c] to-[#000031] py-20 w-full min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center pb-16">
          <h3 className="text-3xl md:text-5xl text-white font-bold flex items-center justify-center gap-4 mb-6 animate-slide-in-left">
            <RiGraduationCapFill className="text-[#ffe600] animate-float text-4xl md:text-6xl" />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Educational{" "}
              <span className="text-[#ffe600] animate-glow">Journey</span>
            </span>
          </h3>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-right leading-relaxed">
            My education has been a journey of self-discovery and growth. Here
            are my educational achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-7xl mx-auto px-4">
          <VerticalTimeline lineColor="#ffe600">
            {educationData.map((edu, index) => (
              <VerticalTimelineElement
                key={edu.id}
                className="vertical-timeline-element--education animate-fadeInUp"
                contentStyle={{
                  background: `linear-gradient(135deg, ${edu.color}15, rgba(0,0,0,0.9))`,
                  color: "#fff",
                  border: `2px solid ${edu.color}40`,
                  borderRadius: "20px",
                  boxShadow: `0 10px 30px ${edu.color}20, 0 0 20px ${edu.color}10`,
                }}
                contentArrowStyle={{ borderRight: `7px solid ${edu.color}` }}
                date={edu.period}
                dateClassName="text-[#ffe600] font-bold text-lg"
                iconStyle={{
                  background: edu.color,
                  color: "#fff",
                  boxShadow: `0 0 20px ${edu.color}50`,
                }}
                icon={edu.icon}
              >
                <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="vertical-timeline-element-title text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg text-[#ffe600] font-semibold mb-3">
                      {edu.institution}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-200 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="pt-3">
                    <h5 className="text-[#ffe600] font-semibold mb-2 text-sm uppercase tracking-wide">
                      Key Achievements
                    </h5>
                    <div className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: edu.color }}
                          ></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
              iconStyle={{
                background: "#ffe600",
                color: "#000",
                boxShadow: "0 0 20px #ffe60050",
              }}
              icon={<RiGraduationCapFill />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
