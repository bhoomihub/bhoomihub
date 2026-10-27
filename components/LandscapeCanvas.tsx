"use client";

import React, { useEffect, useRef } from "react";

export default function LandscapeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Topological grid points
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const nodesCount = Math.floor(Math.min(width, 1200) / 45);
    const nodes: Node[] = [];

    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.15
      });
    }

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Subtle contour wave lines in deep emerald/gold
      ctx.lineWidth = 1;
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const baseOffset = height * (0.65 + j * 0.12);
        ctx.strokeStyle = `rgba(198, 161, 91, ${0.05 + j * 0.03})`;

        for (let x = 0; x <= width; x += 30) {
          const y =
            baseOffset +
            Math.sin(x * 0.003 + time + j) * 45 +
            Math.cos(x * 0.002 - time) * 25;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Interconnected nodes (representing surveyed land points)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 161, 91, ${node.alpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let k = i + 1; k < nodes.length; k++) {
          const other = nodes[k];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(198, 161, 91, ${(1 - dist / 110) * 0.12})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
}
