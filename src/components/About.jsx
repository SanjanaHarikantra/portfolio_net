const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-60 text-center animate-fade-in"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
        About <span className="text-black"> Me</span>
      </h2>

      <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
        I'm a passionate Computer Science student with a strong interest in developing modern, responsive web applications. I love working with the <span className="font-semibold text-black bg-white px-1 rounded">MERN stack</span> and designing user-friendly interfaces guided by solid UI/UX principles.
      </p>
    </section>
  );
};

export default About;
