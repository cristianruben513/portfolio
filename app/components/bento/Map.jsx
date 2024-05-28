"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map({ lng, lat, zoom = 2.5, pitch = 30 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { resolvedTheme } = useTheme();

  let mapTheme;

  if (resolvedTheme === "dark") {
    mapTheme = "night";
  } else if (resolvedTheme === "light") {
    mapTheme = "light";
  }

  useEffect(() => {
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
    });

    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
      map.current.setPadding({ left: 50 });

      const el = document.createElement("span");
      el.className = "map-marker";

      new mapboxgl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  });

  return <div ref={mapContainer} className="size-full" />;
}
