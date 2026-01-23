import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dpr = Math.max(window.devicePixelRatio || 1, 1);
    let width = 0;
    let height = 0;
    let stars = [];
    let start = performance.now();

    const rand = (min, max) => Math.random() * (max - min) + min;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createStars() {
      stars = Array.from({ length: 220 }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(0.3, 1.2),
        alpha: rand(0.3, 0.9),
        speed: rand(0.001, 0.006),
        phase: rand(0, Math.PI * 2),
      }));
    }

    function draw(t) {
      const time = (t - start) / 1000;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((s) => {
        const flicker =
          s.alpha + Math.sin(time * 1000 * s.speed + s.phase) * 0.4;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, flicker)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      createStars();
    });

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden dark:block absolute inset-0 w-full h-full z-0"
    />
  );
}
