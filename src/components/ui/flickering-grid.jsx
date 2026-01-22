"use client";
import React, { useEffect, useMemo, useRef } from "react";

export function FlickeringGrid({
  className = "",
  squareSize = 6,
  gridGap = 6,
  color = "rgb(100, 116, 139)", // slate-500
  maxOpacity = 0.65,
  flickerChance = 0.12, // 👈 probabilidad REAL por cuadrado y frame
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const rgbaPrefix = useMemo(() => {
    // Convierte "color" a "rgba(r,g,b,"
    if (typeof window === "undefined") return "rgba(100,116,139,";
    const tmp = document.createElement("canvas");
    tmp.width = tmp.height = 1;
    const ctx = tmp.getContext("2d");
    if (!ctx) return "rgba(100,116,139,";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let cols = 0;
    let rows = 0;
    let squares = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;

      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Dibujar en coordenadas CSS (no device pixels)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(1, Math.floor(w / (squareSize + gridGap)));
      rows = Math.max(1, Math.floor(h / (squareSize + gridGap)));
      squares = new Float32Array(cols * rows);

      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const draw = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;

          // 👇 cambio visible por frame
          if (Math.random() < flickerChance) {
            squares[idx] = Math.random() * maxOpacity;
          }

          ctx.fillStyle = `${rgbaPrefix}${squares[idx]})`;
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [rgbaPrefix, squareSize, gridGap, maxOpacity, flickerChance]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="pointer-events-none block" />
    </div>
  );
}
