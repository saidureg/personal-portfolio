import { RiGraduationCapFill } from "react-icons/ri";
const Education = () => {
  return (
    <div id="education" className=" bg-neutral text-neutral-content">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:w-2/4 mx-auto text-center py-8">
          <h3 className="text-4xl mb-2 font-bold flex items-center justify-center gap-4">
            <RiGraduationCapFill /> Education
          </h3>
          <p className="text-lg text-gray-400 font-medium">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-4">
          <li>
            <div className="timeline-middle border rounded-full p-2 border-primary">
              <RiGraduationCapFill />
            </div>
            <div className="timeline-start md:text-end mb-10 border rounded-xl  p-2 bg-[#575c66] shadow-md shadow-amber-300">
              <div className="space-y-2">
                <time className="font-mono italic">
                  Bachelor of Computer Science and Engineering
                </time>
                <div className="text-lg font-semibold">
                  Green University of Bangladesh, Dhaka
                </div>
                Feb 2021 - Sep 2024
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle border rounded-full p-2 border-primary">
              <RiGraduationCapFill />
            </div>
            <div className="timeline-end mb-10 border rounded-xl  p-2 bg-[#575c66] shadow-md shadow-amber-300">
              <div className="space-y-2">
                <time className="font-mono italic">
                  Complete Web Development Course With Jhankar Mahbub
                </time>
                <div className="text-lg font-semibold">Programming Hero</div>
                Jul 2023 - Dec 2023
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle border rounded-full p-2 border-primary">
              <RiGraduationCapFill />
            </div>
            <div className="timeline-start md:text-end mb-10 border rounded-xl  p-2 bg-[#575c66] shadow-md shadow-amber-300">
              <div className="space-y-2">
                <time className="font-mono italic">
                  Diploma in Engineering of Computer Technology
                </time>
                <div className="text-lg font-semibold">
                  Chittagong Polytechnic Institute, Chittagong
                </div>
                Jun 2015 - Jul 2019
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
