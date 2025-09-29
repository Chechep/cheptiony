import React, { useEffect, useRef } from "react";
import { THEMES } from "../theme";

export default function Starfield({ mode }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dpr = Math.max(window.devicePixelRatio || 1, 1);
    let width = 0;
    let height = 0;
    let stars = [];
    let galaxies = [];
    let start = performance.now();

    function resize() {
      dpr = Math.max(window.devicePixelRatio || 1, 1);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function pickColorForMode() {
      if (mode === THEMES.LIGHT) return (t) => `rgba(255,255,255,${t})`;
      if (mode === THEMES.DARK) return (t) => `rgba(255,255,255,${t})`;
      // galaxy colors
      const palette = ["#ffd2a6", "#c7f3ff", "#ffc0f3", "#b6ffb0", "#b8baff"];
      return (t) => {
        const c = palette[Math.floor(rand(0, palette.length))];
        const r = parseInt(c.substring(1, 3), 16);
        const g = parseInt(c.substring(3, 5), 16);
        const b = parseInt(c.substring(5, 7), 16);
        return `rgba(${r},${g},${b},${t})`;
      };
    }

    function createStars() {
      stars = [];
      galaxies = [];
      let count = mode === THEMES.DARK ? 220 : mode === THEMES.LIGHT ? 280 : 700;
      for (let i = 0; i < count; i++) {
        const x = rand(0, width);
        const y = rand(0, height);
        const tw = rand(0.2, 1.0);
        const baseR =
          mode === THEMES.DARK ? rand(0.3, 1.2) : mode === THEMES.LIGHT ? rand(0.8, 2.2) : rand(0.3, 1.8);
        const baseAlpha = mode === THEMES.LIGHT ? rand(0.6, 1) : rand(0.3, 0.9);
        const speed = rand(0.001, 0.006) * (mode === THEMES.GALAXY ? 1.8 : 1);
        const colorPicker = pickColorForMode();
        const color = colorPicker(baseAlpha);
        stars.push({ x, y, r: baseR, baseAlpha, speed, phase: rand(0, Math.PI * 2), color, tw });
      }

      if (mode === THEMES.GALAXY) {
        const galaxyCount = Math.max(3, Math.round(rand(4, 8)));
        for (let i = 0; i < galaxyCount; i++) {
          const gx = rand(width * 0.15, width * 0.85);
          const gy = rand(height * 0.15, height * 0.85);
          const gr = rand(Math.min(width, height) * 0.06, Math.min(width, height) * 0.18);
          const gcol = pickColorForMode()(0.9);
          galaxies.push({ gx, gy, gr, gcol });
        }
      }
    }

    function drawBackground() {
      if (mode === THEMES.LIGHT) {
        const g = ctx.createLinearGradient(0, 0, 0, height);
        g.addColorStop(0, "#ffffff");
        g.addColorStop(1, "#f0f9ff");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      } else if (mode === THEMES.DARK) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
      } else {
        const g = ctx.createLinearGradient(0, 0, width, height);
        g.addColorStop(0, "#061826");
        g.addColorStop(0.5, "#0b1a33");
        g.addColorStop(1, "#140a2d");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }
    }

    function draw(t) {
      const time = (t - start) / 1000;
      drawBackground();

      if (galaxies.length) {
        galaxies.forEach((g) => {
          const grd = ctx.createRadialGradient(g.gx, g.gy, g.gr * 0.05, g.gx, g.gy, g.gr);
          grd.addColorStop(0, g.gcol.replace(/,\s*([\d.]+)\)/, ",0.9)"));
          grd.addColorStop(0.5, g.gcol.replace(/,\s*([\d.]+)\)/, ",0.25)"));
          grd.addColorStop(1, "rgba(0,0,0,0)");
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(g.gx, g.gy, g.gr * 1.05, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        });
      }

      stars.forEach((s) => {
        const alpha = Math.max(0, s.baseAlpha + Math.sin(time * (s.speed * 1000) + s.phase) * 0.45);
        ctx.beginPath();
        ctx.fillStyle = s.color.replace(/,\s*([\d.]+)\)/, `,${alpha})`);
        ctx.shadowBlur = Math.min(20, s.r * 8);
        ctx.shadowColor = s.color.replace(/,\s*([\d.]+)\)/, `,${alpha})`);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    function startLoop() {
      cancelAnimationFrame(rafRef.current);
      createStars();
      start = performance.now();
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    startLoop();

    window.addEventListener("resize", () => {
      resize();
      createStars();
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [mode]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}
