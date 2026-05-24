const projects = [
  {
    title: "VIP Security System",
    tech: "React, MongoDB, Leaflet.js, Node.js, Express",
    github: "https://github.com/SanjanaHarikantra/Vip-security",
    demo: "https://vip-security-2-frontend.onrender.com/",
  },
  {
    title: "Comic Book Inventory Management System",
    tech: "React, MongoDB, Node.js, Express",
    github: "https://github.com/SanjanaHarikantra/Sanjana_4SF23CS412_SCEM_UIUXDevelpment_Task10",
    demo: "https://book-management-frontend-n9ni.onrender.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-60 py-40 sm:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-black">Projects</span>
      </h2>

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
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-200 transition duration-300"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-400 transition duration-300"
              >
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
