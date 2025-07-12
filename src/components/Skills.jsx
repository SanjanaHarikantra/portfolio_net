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
      className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white py-14 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Tech <span className="text-black drop-shadow">Stack</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          <span>{skill.icon}</span>
          <span>{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
