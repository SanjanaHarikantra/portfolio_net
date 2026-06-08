const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black px-5 py-16 text-center text-white sm:px-8 sm:py-20"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Contact</h2>

      <p className="mx-auto max-w-xl text-base leading-relaxed sm:text-lg">
        I'd love to hear from you! Whether you have a project, a question, or just want to say hi, feel free to reach out.
      </p>

      <div className="mt-6 text-base font-medium sm:text-lg">
        <span className="block">Email:</span>
        <a
          href="mailto:sanjana@example.com"
          className="break-all text-white underline transition hover:text-pink-200"
        >
          sanjana@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
