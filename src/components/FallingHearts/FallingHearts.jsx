import { useEffect, useState } from "react";
import "./FallingHearts.css";

const HEARTS = ["❤️", "💖", "💗", "💘", "💕"];

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID();
      const size = Math.random() * 30 + 35;
      const duration = Math.random() * 4 + 6;
      const delay = Math.random() * -duration;
      const drift = Math.random() * 200 - 100;
      const left = Math.random() * 100;
      const heart = HEARTS[Math.floor(Math.random() * HEARTS.length)];

      setHearts((h) => [...h, { id, size, duration, delay, drift, left, heart }]);

      // Remove hearts after animation ends
      setTimeout(() => {
        setHearts((h) => h.filter((x) => x.id !== id));
      }, duration * 1000);
    }, 200); // spawn a new heart every 0.2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            "--drift": `${h.drift}px`
          }}
        >
          {h.heart}
        </span>
      ))}
    </div>
  );
}
