"use client";

import { Canvas } from "@react-three/fiber";
import {
  useState,
  type TransitionEvent,
} from "react";
import SpaceScene from "./SpaceScene";

type CinematicIntroProps = {
  onComplete: () => void;
};

export default function CinematicIntro({
  onComplete,
}: CinematicIntroProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  function finishIntro() {
    setIsLeaving(true);
  }

  function handleTransitionEnd(
    event: TransitionEvent<HTMLDivElement>,
  ) {
    if (event.target !== event.currentTarget) return;

    if (isLeaving && event.propertyName === "opacity") {
      onComplete();
    }
  }

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-in-out ${
        isLeaving
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >
        <SpaceScene />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 flex items-start justify-center px-6 pt-24 sm:pt-28">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-200/70">
            A journey through scale
          </p>

          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Every discovery begins somewhere.
          </h1>
        </div>
      </div>

      <button
        type="button"
        onClick={finishIntro}
        className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-sm text-white/70 backdrop-blur-md transition hover:border-white/40 hover:text-white"
      >
        Skip intro
      </button>

      <button
        type="button"
        onClick={finishIntro}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-blue-200/70 transition hover:text-blue-100"
      >
        Enter portfolio ↓
      </button>
    </div>
  );
}