import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaGithub, FaGit, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
        Tech <span className="text-black drop-shadow">Stack</span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* Reusable card for each section */}
        <SkillCard title="Frontend" skills={[
          { icon: <FaHtml5 color="#e34c26" />, label: "HTML5" },
          { icon: <FaCss3Alt color="#2965f1" />, label: "CSS3" },
          { icon: <FaJs color="#f0db4f" />, label: "JavaScript" },
          { icon: <FaBootstrap color="#7952b3" />, label: "Bootstrap" },
          { icon: <SiTailwindcss color="#38bdf8" />, label: "Tailwind CSS" },
          { icon: <FaReact color="#61DBFB" />, label: "React" },
        ]} />

        <SkillCard title="Backend" skills={[
          { icon: <FaNodeJs color="#3C873A" />, label: "Node.js" },
          { icon: <SiExpress color="#eee" />, label: "Express.js" },
        ]} />

        <SkillCard title="Database" skills={[
          { icon: <SiMongodb color="#4DB33D" />, label: "MongoDB" },
          { icon: <SiMysql color="#00758F" />, label: "MySQL" },
        ]} />

        <SkillCard title="Version Control & Tools" skills={[
          { icon: <FaGit color="#f1502f" />, label: "Git" },
          { icon: <FaGithub color="#fff" />, label: "GitHub" },
          { icon: <SiPostman color="#ff6c37" />, label: "Postman" },
          { icon: <FaFigma color="#a259ff" />, label: "Figma" },
        ]} />
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:p-6"
          >
    <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex min-w-0 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm transition-transform duration-200 hover:scale-105 sm:text-base"
        >
          <span>{skill.icon}</span>
          <span className="truncate">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
