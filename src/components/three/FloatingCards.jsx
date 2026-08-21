import { RoundedBox, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Card({
  position,
  rotation,
  color,
  accent,
  label,
  scale = 1,
}) {
  const card = useRef(null);

  useFrame((state) => {
    if (!card.current) return;

    const time = state.clock.elapsedTime;

    card.current.position.y =
      position[1] +
      Math.sin(time * 0.8 + position[0]) * 0.08;
  });

  return (
    <group
      ref={card}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {/* =========================================
          CARD BODY
      ========================================== */}

      <RoundedBox
        args={[2.5, 3.4, 0.12]}
        radius={0.12}
        smoothness={5}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.32}
          metalness={0.05}
        />
      </RoundedBox>

      {/* =========================================
          TOP BRAND STRIPE
      ========================================== */}

      <RoundedBox
        args={[1.9, 0.16, 0.08]}
        radius={0.04}
        smoothness={3}
        position={[0, 1.02, 0.09]}
      >
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={0.25}
        />
      </RoundedBox>

      {/* =========================================
          MAIN LABEL
      ========================================== */}

      <Text
        position={[0, 0.1, 0.11]}
        fontSize={0.31}
        maxWidth={2}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
        fontWeight={800}
      >
        {label}
      </Text>

      {/* =========================================
          DECORATIVE LINES
      ========================================== */}

      <mesh position={[0, -0.65, 0.09]}>
        <boxGeometry args={[1.4, 0.05, 0.04]} />

        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh position={[0, -0.82, 0.09]}>
        <boxGeometry args={[0.9, 0.04, 0.04]} />

        <meshStandardMaterial
          color={accent}
        />
      </mesh>
    </group>
  );
}

export default function FloatingCards() {
  return (
    <>
      {/* =========================================
          DIGITAL — BACK
      ========================================== */}

      <Card
        position={[0.8, 0.45, -1.1]}
        rotation={[0.12, -0.35, 0.08]}
        color="#141414"
        accent="#ffd400"
        label="DIGITAL"
        scale={0.88}
      />

      {/* =========================================
          BRAND — MIDDLE
      ========================================== */}

      <Card
        position={[0, 0, 0]}
        rotation={[-0.05, 0.12, -0.03]}
        color="#e50914"
        accent="#ffd400"
        label="BRAND"
        scale={1}
      />

      {/* =========================================
          PRINT — FRONT
      ========================================== */}

      <Card
        position={[-0.85, -0.55, 1]}
        rotation={[0.1, 0.35, -0.08]}
        color="#f4f4f4"
        accent="#e50914"
        label="PRINT"
        scale={0.84}
      />
    </>
  );
}