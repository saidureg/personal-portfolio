import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserTie } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience" className="bg-neutral text-neutral-content py-10">
      <h3 className="text-4xl mb-12 font-bold flex items-center justify-center gap-4">
        <FaUserTie /> Experience
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jun 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">A Maze Venture</h4>
          <p>
            As a Front-End Developer at Amaze Venture, I created and developed a
            dashboard that provides real-time campaign metrics for advertisers
            and publishers. I also developed a campaign tracker website for
            monitoring and tagging campaigns with detailed analytics. In
            addition, I designed and implemented the front-end architecture and
            user interface for two major web applications, ensuring a seamless
            user experience. I created rich media banners with animations and
            interactive elements, tailored to client specifications, and
            collaborated closely with clients to deliver responsive designs that
            met their business needs.
          </p>
          <p>
            Skills: • ReactJS • ExpressJS • Redux • Material UI • HTML • CSS •
            JavaScript • Gsap • Framer Motion • Tailwind CSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Mar 2021 - May 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Operator & Account Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quick Clear Enterprise
          </h4>
          <p>
            In my role at Quick Clear Enterprise, I proficiently handle P&L
            statements, liaise with clients through email, and meticulously
            manage bank statements for streamlined financial operations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Nov 2019 - Feb 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title">
            Westerns Sanitary World
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Operator
          </h4>
          <p>
            In my role at Westerns Sanitary World, I proficiently handle P&L
            statements, sells information, and meticulously manage bank
            statements for streamlined financial operations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaUserTie />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
