import { Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import FloatingCards from "./FloatingCards";

export default function PrintBrandDigital() {
  const group = useRef(null);

  const { viewport } = useThree();

  /*
   * =========================================
   * RESPONSIVE BREAKPOINTS
   * =========================================
   */

  const isMobile = viewport.width < 6;

  const isTablet =
    viewport.width >= 6 &&
    viewport.width < 10;

  /*
   * =========================================
   * RESPONSIVE POSITION
   * =========================================
   */

  let position;

  if (isMobile) {
    position = [1.15, -1.15, 0];
  } else if (isTablet) {
    position = [2.0, -0.3, 0];
  } else {
    position = [2.7, 0, 0];
  }

  /*
   * =========================================
   * RESPONSIVE SCALE
   * =========================================
   */

  let scale;

  if (isMobile) {
    scale = 0.68;
  } else if (isTablet) {
    scale = 0.84;
  } else {
    scale = 1;
  }

  /*
   * =========================================
   * SUBTLE GROUP MOTION
   * =========================================
   */

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    group.current.rotation.y =
      Math.sin(time * 0.25) * 0.12;

    group.current.rotation.x =
      Math.sin(time * 0.18) * 0.04;
  });

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
    >
      <Float
        speed={1}
        rotationIntensity={0.15}
        floatIntensity={0.35}
      >
        <FloatingCards />
      </Float>
    </group>
  );
}