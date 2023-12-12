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
          date="Jun 2022 - Dec 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ABC Inovations Ltd.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            harum.
          </p>
          <p>
            Skills: • ReactJS • Redux • NodeJs • Material UI • HTML • CSS •
            JavaScript
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
