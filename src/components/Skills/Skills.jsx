import { useEffect, useState } from "react";
import SkillsCard from "./SkillsCard";
import { FaLaptopCode } from "react-icons/fa6";

const Skills = () => {
  const [skills, setSkils] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((response) => response.json())
      .then((data) => setSkils(data));
  }, []);

  return (
    <div
      id="skills"
      className=" bg-gradient-to-b from-[#000031] to-[#00002c] py-20 w-full"
    >
      <div className="text-center pb-10 text-2xl md:text-4xl text-white font-bold  ">
        <h3 className=" flex items-center justify-center gap-2">
          {" "}
          <FaLaptopCode /> Skills &{" "}
          <span className="text-[#ffe600]">Abilities</span>
        </h3>
      </div>
      <div className="max-w-4xl bg-gradient-to-b from-[#57059e] to-[#4a00e0] mx-auto text-center gap-6   rounded-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-10 p-8  ">
        {skills?.map((data, idx) => (
          <SkillsCard key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
