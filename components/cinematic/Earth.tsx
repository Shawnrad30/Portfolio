"use client";

import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  BackSide,
  MathUtils,
  Quaternion,
  SRGBColorSpace,
  Vector3,
  type Group,
  type Mesh,
} from "three";

type EarthProps = {
  showPittsburgh: boolean;
};

const EARTH_RADIUS = 1.4;

const PITTSBURGH_LATITUDE = 40.4406;
const PITTSBURGH_LONGITUDE = -79.9959;

function latitudeLongitudeToVector3(
  latitude: number,
  longitude: number,
  radius: number,
) {
  const phi = MathUtils.degToRad(90 - latitude);
  const theta = MathUtils.degToRad(longitude + 180);

  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export default function Earth({
  showPittsburgh,
}: EarthProps) {
  const earthGroupRef = useRef<Group>(null);
  const cloudsRef = useRef<Mesh>(null);

  const targetQuaternionRef = useRef<Quaternion | null>(null);

  const [earthTexture, normalTexture, cloudTexture] = useTexture([
    "/textures/earth/earth-day.jpg",
    "/textures/earth/earth-normal.jpg",
    "/textures/earth/earth-clouds.png",
  ]);

  earthTexture.colorSpace = SRGBColorSpace;

  const pittsburghPosition = useMemo(
    () =>
      latitudeLongitudeToVector3(
        PITTSBURGH_LATITUDE,
        PITTSBURGH_LONGITUDE,
        EARTH_RADIUS * 1.018,
      ),
    [],
  );

  useEffect(() => {
    const earthGroup = earthGroupRef.current;

    if (!showPittsburgh || !earthGroup) {
      targetQuaternionRef.current = null;
      return;
    }

    /*
      Pittsburgh's direction after accounting for Earth's current rotation.
    */
    const currentPittsburghDirection = pittsburghPosition
      .clone()
      .normalize()
      .applyQuaternion(earthGroup.quaternion);

    /*
      The camera is positioned on the positive Z axis, so aligning Pittsburgh
      with positive Z places it directly in the center of the screen.
    */
    const cameraFacingDirection = new Vector3(0, 0, 1);

    /*
      Calculate only the shortest rotation needed from Earth's current
      orientation—not a completely new absolute rotation.
    */
    const correctionQuaternion = new Quaternion().setFromUnitVectors(
      currentPittsburghDirection,
      cameraFacingDirection,
    );

    const targetQuaternion = correctionQuaternion
      .multiply(earthGroup.quaternion.clone())
      .normalize();

    targetQuaternionRef.current = targetQuaternion;
  }, [showPittsburgh, pittsburghPosition]);

  useFrame((_, delta) => {
    const earthGroup = earthGroupRef.current;

    if (earthGroup) {
      if (showPittsburgh && targetQuaternionRef.current) {
        const interpolationAmount = 1 - Math.exp(-1.35 * delta);

        earthGroup.quaternion.slerp(
          targetQuaternionRef.current,
          interpolationAmount,
        );
      } else {
        earthGroup.rotation.y += delta * 0.08;
      }
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={earthGroupRef}>
      {/* Earth surface */}
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 96, 96]} />

        <meshStandardMaterial
          map={earthTexture}
          normalMap={normalTexture}
          normalScale={[0.35, 0.35]}
          roughness={0.78}
          metalness={0}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef} scale={1.007}>
        <sphereGeometry args={[EARTH_RADIUS, 96, 96]} />

        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.38}
          depthWrite={false}
          roughness={1}
        />
      </mesh>

      {/* Atmospheric shell */}
      <mesh scale={1.055}>
        <sphereGeometry args={[EARTH_RADIUS, 96, 96]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.11}
          side={BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Render only after Earth has been reached */}
      {showPittsburgh && (
        <group position={pittsburghPosition}>
          <mesh>
            <sphereGeometry args={[0.035, 24, 24]} />
            <meshBasicMaterial color="#bfdbfe" />
          </mesh>

          <pointLight
            color="#60a5fa"
            intensity={2.5}
            distance={0.65}
          />

          <mesh scale={1.8}>
            <sphereGeometry args={[0.035, 24, 24]} />

            <meshBasicMaterial
              color="#60a5fa"
              transparent
              opacity={0.2}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}
    </group>
  );
}