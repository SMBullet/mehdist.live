"use client";

import { useEffect, useRef } from "react";

const Starfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundColor: "#000",
        backgroundImage: `
          linear-gradient(
            rgba(255, 255, 255, 0.01) 1px, 
            transparent 1px
          ),
          linear-gradient(
            90deg, 
            rgba(255, 255, 255, 0.01) 1px, 
            transparent 1px
          ),
          radial-gradient(
            circle at 50% 50%, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(0, 0, 0, 0) 70%
          )
        `,
        backgroundSize: `
          40px 40px, /* Grid size for horizontal and vertical lines */
          40px 40px, 
          200% 200% /* Faint radial glow size */
        `,
        backgroundBlendMode: "screen",
      }}
    />
  );
};

export default Starfield;
