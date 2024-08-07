"use client"

import { useTheme } from "next-themes";
import { useEffect } from "react";
import "./index.css";

export default function Background() {
  const { theme } = useTheme();

  const generateSpaceLayer = (
    size: string,
    selector: string,
    totalStars: number,
    duration: string
  ) => {
    const COLORS = theme === "dark" ?
      ["#fff7", "#fffc"] :
      ["#444"];

    const layer = [];

    for (let i = 0; i < totalStars; i++) {

      const color = COLORS[~~(Math.random() * COLORS.length)];

      let x, y;

      do {
        x = Math.floor(Math.random() * window.innerWidth);
        y = Math.floor(Math.random() * window.innerHeight);
      } while (
        // Verificar que las estrellas estén fuera del área ocupada por el div central

        // Ancho del div central: 800px, entonces su mitad es 400px
        x >= window.innerWidth / 2 &&
        x <= window.innerWidth / 2 &&

        // Alto del div central: 800px, entonces su mitad es 400px
        y >= window.innerHeight / 2 &&
        y <= window.innerHeight / 2 
      );

      layer.push(`${x}px ${y}px 0 ${color}, ${x}px ${y + window.innerHeight}px 0 ${color}`);
    }

    const container = document.querySelector(selector) as HTMLElement;

    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
    container.style.setProperty("--space-layer", layer.join(","));
  };

  useEffect(() => {
    generateSpaceLayer("2px", ".space-1", 120, "35s");
    generateSpaceLayer("3px", ".space-2", 80, "50s");
    generateSpaceLayer("6px", ".space-3", 25, "65s");
  }, [theme]);

  return (
    <div className="dark:bg-black bg-white fixed inset-0 overflow-hidden flex">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
}
