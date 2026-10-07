"use client";

import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    const glyphs = "01";
    const birthdayWords = ["FELIZ", "CUMPLE", "PACO", "42"];

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(6, 10, 8, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-jbmono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        const useWord = Math.random() > 0.995;
        const text = useWord
          ? birthdayWords[Math.floor(Math.random() * birthdayWords.length)][0]
          : glyphs[Math.floor(Math.random() * glyphs.length)];

        ctx.fillStyle = useWord
          ? "rgba(255, 176, 0, 0.9)"
          : Math.random() > 0.93
          ? "rgba(74, 242, 255, 0.85)"
          : "rgba(57, 255, 106, 0.75)";

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 45);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
    />
  );
}
