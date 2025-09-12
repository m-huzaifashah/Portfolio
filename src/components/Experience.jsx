import experiences from "../Data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative border-l-2 border-purple-500 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-12 relative last:mb-0">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900" />
              <h3 className="ml-4 text-xl font-semibold text-purple-400">{exp.title}</h3>
              <p className="text-slate-300 mb-1">{exp.company}</p>
              <p className="text-slate-400 mb-2">{exp.period}</p>
              <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
