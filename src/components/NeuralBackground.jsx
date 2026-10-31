import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function NeuralBackground() {

  const ref = useRef(null);

  useEffect(() => {

    const effect = NET({
      el: ref.current,
      THREE: THREE,

      color: 0x00ffff,
      backgroundColor: 0x0f0f0f,

      points: 10,
      maxDistance: 20,
      spacing: 18,

      mouseControls: true,
      touchControls: true,
      gyroControls: false
    });

    return () => {
      if (effect) effect.destroy();
    };

  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );

}

export default NeuralBackground;