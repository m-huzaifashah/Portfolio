const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Whether you
          have a project in mind or just want to chat, feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:mhuzaifahabibshah@gmail.com.com"
            className="bg-purple-500 px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://github.com/m-huzaifashah"
            target="_blank"
            rel="noreferrer"
            className="border border-purple-500 px-6 py-3 rounded-full font-medium hover:bg-purple-500/20 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
