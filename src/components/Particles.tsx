import { useMemo } from "react";

export function Particles({ count = 30 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 25,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: "0 0 6px #d4af37",
          }}
        />
      ))}
    </div>
  );
}
