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
      ["#fff2", "#fff4", "#fff7", "#fffc"] :
      ["#2222", "#3333", "#5555", "#6666"];

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
        x >= window.innerWidth / 2 - 400 &&
        x <= window.innerWidth / 2 + 400 &&

        // Alto del div central: 800px, entonces su mitad es 400px
        y >= window.innerHeight / 2 - 400 &&
        y <= window.innerHeight / 2 + 400
      );

      layer.push(`${x}px ${y}px 0 ${color}, ${x}px ${y + window.innerHeight}px 0 ${color}`);
    }

    const container = document.querySelector(selector) as HTMLElement;

    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
    container.style.setProperty("--space-layer", layer.join(","));
  };

  useEffect(() => {
    generateSpaceLayer("2px", ".space-1", 200, "35s");
    generateSpaceLayer("3px", ".space-2", 100, "30s");
    generateSpaceLayer("6px", ".space-3", 25, "25s");
  }, [theme]);

  return (
    <div className="dark:bg-black bg-white fixed inset-0 overflow-hidden hidden md:flex">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
}
