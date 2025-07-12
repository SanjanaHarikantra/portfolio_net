import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
        I'm Sanjana
      </h1>

      {/* Typewriter subtitle */}
      <p className="text-lg md:text-xl mt-4">
        <Typewriter
          words={['Full Stack Developer', 'UI/UX Enthusiast']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {/* Download Resume */}
        <a
          href="/Sanjana_Resume.pdf"
          download
          className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-100 transition duration-300"
        >
          Download Resume
        </a>

        {/* Contact Me */}
        <a
          href="#contact"
          className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
