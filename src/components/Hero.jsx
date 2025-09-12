import { Code, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code size={48} className="text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            M Huzaifa Shah
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            React.js Frontend Developer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Crafting beautiful, responsive, and performant web applications with modern React.js. 
            Passionate about creating exceptional user experiences and clean, maintainable code.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-3 border border-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/m-huzaifashah" target='_blank' className="p-3 rounded-full bg-slate-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mhuzaifahabibshah@gmail.com" className="p-3 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
