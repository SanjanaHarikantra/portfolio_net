import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black px-5 py-16 text-center text-white sm:px-8 sm:py-20"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
        Get In Touch
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
        I'm currently seeking internship and full-time opportunities in
        Full-Stack Development. Feel free to connect with me!
      </p>

      <div className="mx-auto max-w-2xl space-y-4">
        
        <div className="flex items-center justify-center gap-3">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/sanjana-shivanand-harikantra-39454a274/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaGithub />
          <a
            href="https://github.com/SanjanaHarikantra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300"
          >
            GitHub Profile
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaMapMarkerAlt />
          <span>Karnataka, India</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="#home"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          View Resume
        </a>

        <a
          href="mailto:sanjana@gmail.com"
          className="rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-500"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;