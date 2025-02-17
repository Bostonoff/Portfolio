import React from "react";
import LinearBar from "./LinearBar";
import { SKILLS } from "../../../constants/constants";

// const getColor = (level) => {
//   const numericLevel = parseInt(level);
//   if (numericLevel >= 90) return 'bg-[#1fdf69]';
//   if (numericLevel >= 80) return 'bg-[#57f995]';
//   if (numericLevel >= 60) return 'bg-[#85ffb4]';
//   return 'bg-[#85ffb4]';
// };
const Skills = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold bg-gradient-to-bl">
          Experties and Competencies
        </span>
        <div className="flex flex-col space-y-4">
          {SKILLS.map((skill, index) => {
            return (
              <LinearBar
                key={index}
                title={skill.title}
                percent={skill.level}
                bgColor="bg-Green"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
