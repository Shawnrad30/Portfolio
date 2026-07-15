"use client";

import { Stars } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Earth from "./Earth";

type SpaceSceneProps = {
  journeyStarted: boolean;
  onApproachComplete: () => void;
};

export default function SpaceScene({
  journeyStarted,
  onApproachComplete,
}: SpaceSceneProps) {
  return (
    <>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.08} />

      <directionalLight
        position={[5, 2, 5]}
        intensity={2.8}
        color="#fff7ed"
      />

      <pointLight
        position={[-4, 1, -2]}
        intensity={1.5}
        color="#2563eb"
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.25}
      />

      <Earth />

      <CameraRig
        journeyStarted={journeyStarted}
        onApproachComplete={onApproachComplete}
      />
    </>
  );
}