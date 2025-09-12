import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    { icon: <Code />, title: "Clean Code", desc: "I write maintainable and scalable code following best practices." },
    { icon: <Palette />, title: "UI/UX", desc: "Passionate about creating visually appealing and user-friendly interfaces." },
    { icon: <Zap />, title: "Performance", desc: "Optimizing web applications for fast load times and smooth interactions." },
    { icon: <Users />, title: "Collaboration", desc: "Experienced in working with teams using modern development workflows." },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:scale-105 transform transition">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-400">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
