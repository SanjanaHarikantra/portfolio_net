import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ERA5 wind data processing Tool",
    tech: "HTML, CSS, JavaScript, Python Flask, SQLite",
    github: "https://github.com/SanjanaHarikantra/era5_tool",
    demo: "https://era5-tool.onrender.com/",
  },
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Leaflet.js, Node.js, Express",
    github: "https://github.com/SanjanaHarikantra/Vip-security",
    demo: "https://vip-security-2-frontend.onrender.com/",
  },
  {
    title: "Cocoa Desease Detection ",
    tech: "HTML, CSS, JavaScript, Python Flask, MySQL",
    github: "https://github.com/SanjanaHarikantra/CoacaDesease",
    
  },
  {
    title: "Comic Book Inventory Management System",
    tech: "React, MongoDB, Node.js, Express",
    github: "https://github.com/SanjanaHarikantra/Sanjana_4SF23CS412_SCEM_UIUXDevelpment_Task10",
    demo: "https://book-management-frontend-n9ni.onrender.com",
  },
  {
    title: "SVE Lights Website",
    tech: "React, Node.js, Express, MySQL",
    github: "https://github.com/SanjanaHarikantra/sve_lights/tree/main/sve-lights",
    demo: "https://sve-lights.vercel.app/",
  },
  {
    title: "Food delivery Application",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/SanjanaHarikantra/HomeFood",
    demo: "https://home-food-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        My <span className="text-black">Projects</span>
      </h2>

      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-full min-h-70 flex-col rounded-lg border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
          >
            <h3 className="mb-4 text-xl font-semibold leading-snug text-pink-200 sm:text-2xl">
              {project.title}
            </h3>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tech.split(",").map((tech) => (
                <span
                  key={tech.trim()}
                  className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-gray-100"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-center font-semibold text-pink-600 transition duration-300 hover:bg-pink-200"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-pink-600 px-4 py-2 text-center font-semibold text-white transition duration-300 hover:bg-pink-400"
              >
                <FaExternalLinkAlt className="text-sm" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
