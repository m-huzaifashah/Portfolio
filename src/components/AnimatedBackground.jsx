import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out"
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  );
};

export default AnimatedBackground;
