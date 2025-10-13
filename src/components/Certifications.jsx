import certifications from "../Data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="relative border-l-2 border-purple-500 pl-8">
          {certifications.map((cert, i) => (
            <div key={i} className="mb-12 relative last:mb-0">
              {/* Dot icon */}
              <div className="absolute -left-3 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900" />

              {/* Certification details */}
              <h3 className="ml-4 text-xl font-semibold text-purple-400">
                {cert.title}
              </h3>
              <p className="text-slate-300 mb-1">{cert.issuer}</p>
              <p className="text-slate-400 mb-2">{cert.period}</p>
              <p className="text-slate-400 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
