import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = [];
      
      for (let i = 0; i < 35; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.4,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) p.y = canvas.height + 10;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 94, 43, ${p.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    window.addEventListener("resize", initParticles);
    return () => window.removeEventListener("resize", initParticles);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[3] pointer-events-none"
    />
  );
};

export default ParticlesCanvas;