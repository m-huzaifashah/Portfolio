import projects from "../Data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-105 transform transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  className="text-purple-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
