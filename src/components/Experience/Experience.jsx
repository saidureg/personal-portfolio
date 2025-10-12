import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserTie, FaCode, FaChartLine, FaCog } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Front-End Developer",
      company: "A Maze Venture",
      date: "Jun 2024 - Present",
      icon: <FaCode />,
      color: "#ffe600",
      description:
        "As a Front-End Developer at Amaze Venture, I created and developed a dashboard that provides real-time campaign metrics for advertisers and publishers. I also developed a campaign tracker website for monitoring and tagging campaigns with detailed analytics.",
      details:
        "In addition, I designed and implemented the front-end architecture and user interface for two major web applications, ensuring a seamless user experience. I created rich media banners with animations and interactive elements, tailored to client specifications, and collaborated closely with clients to deliver responsive designs that met their business needs.",
      skills: [
        "ReactJS",
        "ExpressJS",
        "Redux",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "Framer Motion",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "Computer Operator & Account Manager",
      company: "Quick Clear Enterprise",
      date: "Mar 2021 - May 2022",
      icon: <FaChartLine />,
      color: "#4a00e0",
      description:
        "In my role at Quick Clear Enterprise, I proficiently handle P&L statements, liaise with clients through email, and meticulously manage bank statements for streamlined financial operations.",
      skills: [
        "Financial Analysis",
        "Client Management",
        "Data Processing",
        "Excel",
        "Communication",
      ],
    },
    {
      id: 3,
      title: "Computer Operator",
      company: "Westerns Sanitary World",
      date: "Nov 2019 - Feb 2021",
      icon: <FaCog />,
      color: "#ff6b35",
      description:
        "In my role at Westerns Sanitary World, I proficiently handle P&L statements, sells information, and meticulously manage bank statements for streamlined financial operations.",
      skills: [
        "Data Management",
        "Financial Reporting",
        "System Operations",
        "Record Keeping",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-[#000031] to-[#00002c] py-20 w-full min-h-screen"
    >
      {/* Header Section */}
      <div className="text-center pb-20 px-4 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-gradient-to-r from-[#ffe600]/10 to-[#4a00e0]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-4xl md:text-6xl text-white font-bold flex items-center justify-center gap-6 mb-8 animate-slide-in-left">
            <div className="relative">
              <FaUserTie className="text-[#ffe600] animate-float text-5xl md:text-7xl drop-shadow-2xl" />
              <div className="absolute inset-0 text-[#ffe600]/30 animate-ping">
                <FaUserTie className="text-5xl md:text-7xl" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Work{" "}
              <span className="text-[#ffe600] animate-glow drop-shadow-lg">
                Experience
              </span>
            </span>
          </h3>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto animate-slide-in-right leading-relaxed font-light">
            A journey through my professional growth and achievements
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffe600] to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-7xl mx-auto px-4">
        <VerticalTimeline lineColor="#ffe600">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work animate-fadeInUp"
              contentStyle={{
                background: `linear-gradient(135deg, ${exp.color}20, rgba(0,0,0,0.95))`,
                color: "#fff",
                border: `2px solid ${exp.color}60`,
                borderRadius: "24px",
                boxShadow: `0 20px 40px ${exp.color}30, 0 0 30px ${exp.color}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
                backdropFilter: "blur(20px)",
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${exp.color}`,
                filter: `drop-shadow(0 0 10px ${exp.color}50)`,
              }}
              date={exp.date}
              dateClassName="text-[#ffe600] font-bold text-lg drop-shadow-lg"
              iconStyle={{
                background: `linear-gradient(135deg, ${exp.color}, ${exp.color}CC)`,
                color: "#fff",
                boxShadow: `0 0 30px ${exp.color}60, inset 0 1px 0 rgba(255,255,255,0.2)`,
                border: `2px solid ${exp.color}80`,
              }}
              icon={exp.icon}
            >
              <div className="space-y-4 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div>
                  <h3 className="vertical-timeline-element-title text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-lg text-[#ffe600] font-semibold mb-3">
                    {exp.company}
                  </h4>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-200 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.details && (
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {exp.details}
                    </p>
                  )}
                </div>

                <div className="pt-3">
                  <h5 className="text-[#ffe600] font-semibold mb-2 text-sm uppercase tracking-wide">
                    Key Skills & Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-200 text-xs rounded-full border border-gray-600/50 hover:border-[#ffe600]/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
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
            icon={<FaUserTie />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
