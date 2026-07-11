"use client";

import { Stars } from "@react-three/drei";

export default function SpaceScene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.15} />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.25}
      />
    </>
  );
}