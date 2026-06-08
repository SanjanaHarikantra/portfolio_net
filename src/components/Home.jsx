import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 px-5 pt-24 text-center text-white sm:px-8"
    >
      <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
        I'm Sanjana
      </h1>

      {/* Typewriter subtitle */}
      <p className="mt-4 min-h-8 text-lg sm:text-xl">
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
      <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
        {/* Download Resume */}
        <a
          href="https://drive.google.com/file/d/1bFBTDW8KyTSHNeGJIzIXnpAbvCyPBL29/view?usp=drivesdk"
          download
          className="rounded-lg bg-white px-6 py-3 font-semibold text-pink-600 shadow-md transition duration-300 hover:bg-pink-100"
        >
          Download Resume
        </a>

        {/* Contact Me */}
        <a
          href="#contact"
          className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-pink-600"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
