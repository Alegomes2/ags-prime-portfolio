

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    const handlePointerMove = (event) => {
      background.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      background.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="interactive-background"
      aria-hidden="true"
    >
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="mouse-glow" />
      <div className="background-grid" />
    </div>
  );
}
