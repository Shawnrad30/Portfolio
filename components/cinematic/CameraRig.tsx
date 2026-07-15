"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils, Vector3 } from "three";

type CameraRigProps = {
  journeyStarted: boolean;
  onApproachComplete: () => void;
};

const startingPosition = new Vector3(0, 0, 6);
const approachPosition = new Vector3(0, 0, 3.4);

export default function CameraRig({
  journeyStarted,
  onApproachComplete,
}: CameraRigProps) {
  const camera = useThree((state) => state.camera);
  const hasCompletedRef = useRef(false);

  useFrame((_, delta) => {
    const target = journeyStarted
      ? approachPosition
      : startingPosition;

    camera.position.x = MathUtils.damp(
      camera.position.x,
      target.x,
      1.8,
      delta,
    );

    camera.position.y = MathUtils.damp(
      camera.position.y,
      target.y,
      1.8,
      delta,
    );

    camera.position.z = MathUtils.damp(
      camera.position.z,
      target.z,
      1.8,
      delta,
    );

    camera.lookAt(0, 0, 0);

    const distanceToTarget = camera.position.distanceTo(target);

    if (
      journeyStarted &&
      distanceToTarget < 0.03 &&
      !hasCompletedRef.current
    ) {
      hasCompletedRef.current = true;
      onApproachComplete();
    }
  });

  return null;
}