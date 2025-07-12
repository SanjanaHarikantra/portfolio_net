const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>

      <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        I'd love to hear from you! Whether you have a project, a question, or just want to say hi 👋 — feel free to reach out.
      </p>

      <div className="mt-6 text-lg font-medium">
        <span className="block">📧 Email:</span>
        <a
          href="mailto:sanjana@example.com"
          className="text-white underline hover:text-pink-200 transition"
        >
          sanjana@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
