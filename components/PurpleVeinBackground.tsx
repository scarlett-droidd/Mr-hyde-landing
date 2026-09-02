"use client";

import { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";

/**
 * PurpleVeinBackground
 * Fondo animado tipo "grietas de rayo" (lightning-crack / Voronoi) en tonos morados.
 * Pensado para usarse detrás de un header, con z-index negativo.
 *
 * Requiere: npm install d3-delaunay
 */

const COLORS = {
  bgDark: "#1C0C28",
  bgMid: "#58306E",
  dot: "#7A4A96",
  veinCore: "#F8F3FC",
  veinGlow: "#B074D0",
};

type Point = { x: number; y: number; vx: number; vy: number };

export default function PurpleVeinBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dotCanvas: HTMLCanvasElement | null = null;
    let points: Point[] = [];
    let raf = 0;

    const N_POINTS = 20;
    const DOT_SPACING = 24;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildDotLayer();
      initPoints();
    }

    // Fondo de puntos precalculado en un canvas offscreen (no se recalcula cada frame)
    function buildDotLayer() {
      dotCanvas = document.createElement("canvas");
      dotCanvas.width = width;
      dotCanvas.height = height;
      const dctx = dotCanvas.getContext("2d")!;

      const grad = dctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, COLORS.bgDark);
      grad.addColorStop(1, COLORS.bgMid);
      dctx.fillStyle = grad;
      dctx.fillRect(0, 0, width, height);

      for (let gy = 0; gy < height; gy += DOT_SPACING) {
        for (let gx = 0; gx < width; gx += DOT_SPACING) {
          const jx = gx + DOT_SPACING / 2 + (Math.random() - 0.5) * 8;
          const jy = gy + DOT_SPACING / 2 + (Math.random() - 0.5) * 8;
          const r = 2 + Math.random() * 3.5;
          dctx.beginPath();
          dctx.arc(jx, jy, r, 0, Math.PI * 2);
          dctx.fillStyle = COLORS.dot;
          dctx.globalAlpha = 0.55;
          dctx.fill();
        }
      }
      dctx.globalAlpha = 1;
    }

    function initPoints() {
      points = Array.from({ length: N_POINTS }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    }



    function step() {
      // mover los puntos (drift lento, rebote en bordes)
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // fondo con puntos
      if (dotCanvas) ctx!.drawImage(dotCanvas, 0, 0, width, height);

      // Voronoi con d3-delaunay
      const delaunay = Delaunay.from(points.map((p) => [p.x, p.y]));
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      // glow (pasada ancha y difusa)
      ctx!.save();
      ctx!.shadowColor = COLORS.veinGlow;
      ctx!.shadowBlur = 14;
      ctx!.strokeStyle = COLORS.veinGlow;
      ctx!.lineWidth = 3;
      ctx!.globalAlpha = 0.5;
      for (let i = 0; i < points.length; i++) {
        const cell = voronoi.cellPolygon(i);
        if (!cell) continue;
        ctx!.beginPath();
        cell.forEach(([x, y]: any, j: number) => (j === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)));
        ctx!.closePath();
        ctx!.stroke();
      }
      ctx!.restore();

      // núcleo nítido de las líneas
      ctx!.strokeStyle = COLORS.veinCore;
      ctx!.lineWidth = 1.4;
      ctx!.globalAlpha = 0.9;
      for (let i = 0; i < points.length; i++) {
        const cell = voronoi.cellPolygon(i);
        if (!cell) continue;
        ctx!.beginPath();
        cell.forEach(([x, y]: any, j: number) => (j === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)));
        ctx!.closePath();
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "block",
      }}
    />
  );
}
