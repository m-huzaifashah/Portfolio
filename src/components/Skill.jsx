import skills from "../Data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:scale-105 transform transition"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
