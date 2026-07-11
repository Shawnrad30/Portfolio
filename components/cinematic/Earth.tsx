"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export default function Earth() {
  const earthRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!earthRef.current) return;

    earthRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.4, 96, 96]} />

        <meshStandardMaterial
          color="#123b66"
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>

      {/* Atmospheric glow */}
      <mesh scale={1.045}>
        <sphereGeometry args={[1.4, 96, 96]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.08}
          side={2}
        />
      </mesh>
    </group>
  );
}