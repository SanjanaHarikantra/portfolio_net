const projects = [
  {
    title: "Cocoa Disease Detection",
    tech: "Flask, MySQL, Keras",
    github: "https://github.com/yourusername/cocoa-disease",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Alumni Portal",
    tech: "MERN Stack",
    github: "https://github.com/yourusername/alumni-portal",
    demo: "#",
  },
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Banker's Algorithm",
    github: "https://github.com/yourusername/vip-security",
    demo: "#",
  },
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Banker's Algorithm",
    github: "https://github.com/yourusername/vip-security",
    demo: "#",
  },
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Banker's Algorithm",
    github: "https://github.com/yourusername/vip-security",
    demo: "#",
  },
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Banker's Algorithm",
    github: "https://github.com/yourusername/vip-security",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-4 sm:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My <span className="text-black">Projects</span></h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-300 mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-200 mb-6">{project.tech}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-200 transition duration-300"
              >
                Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-200 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
