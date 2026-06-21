import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setVisible(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!visible) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
