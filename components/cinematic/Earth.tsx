"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  BackSide,
  SRGBColorSpace,
  type Group,
  type Mesh,
} from "three";

export default function Earth() {
  const earthGroupRef = useRef<Group>(null);
  const cloudsRef = useRef<Mesh>(null);

  const [earthTexture, normalTexture, cloudTexture] = useTexture([
    "/textures/earth/earth-day.jpg",
    "/textures/earth/earth-normal.jpg",
    "/textures/earth/earth-clouds.png",
  ]);

  earthTexture.colorSpace = SRGBColorSpace;

  useFrame((_, delta) => {
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * 0.08;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.105;
    }
  });

  return (
    <group ref={earthGroupRef}>
      {/* Earth surface */}
      <mesh>
        <sphereGeometry args={[1.4, 96, 96]} />

        <meshStandardMaterial
          map={earthTexture}
          normalMap={normalTexture}
          normalScale={[0.35, 0.35]}
          roughness={0.78}
          metalness={0}
        />
      </mesh>

      {/* Independently rotating cloud layer */}
      <mesh ref={cloudsRef} scale={1.007}>
        <sphereGeometry args={[1.4, 96, 96]} />

        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.38}
          depthWrite={false}
          roughness={1}
        />
      </mesh>

      {/* Atmospheric glow */}
      <mesh scale={1.055}>
        <sphereGeometry args={[1.4, 96, 96]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.11}
          side={BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}