const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-20 text-center text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
        About <span className="text-black"> Me</span>
      </h2>

      <p className="mx-auto max-w-3xl text-base leading-relaxed sm:text-lg">
        I'm a passionate Computer Science student with a strong interest in developing modern, responsive web applications. I love working with the <span className="font-semibold text-black bg-white px-1 rounded">MERN stack</span> and designing user-friendly interfaces guided by solid UI/UX principles.
      </p>
    </section>
  );
};

export default About;
