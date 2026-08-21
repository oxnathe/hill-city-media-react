import { ContactShadows } from "@react-three/drei";
import PrintBrandDigital from "./PrintBrandDigital";

export default function Scene() {
  return (
    <>
      {/* =========================================
          LIGHTING
      ========================================== */}

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[5, 6, 6]}
        intensity={2.5}
      />

      {/* RED LIGHT */}

      <pointLight
        position={[-4, 2, 3]}
        intensity={18}
        distance={12}
        color="#e50914"
      />

      {/* YELLOW LIGHT */}

      <pointLight
        position={[4, -2, 2]}
        intensity={12}
        distance={10}
        color="#ffd400"
      />

      {/* =========================================
          MAIN 3D OBJECT
      ========================================== */}

      <PrintBrandDigital />

      {/* =========================================
          GROUND SHADOW
      ========================================== */}

      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.35}
        scale={10}
        blur={2}
        far={5}
      />
    </>
  );
}