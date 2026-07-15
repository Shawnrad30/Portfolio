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
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [earthReached, setEarthReached] = useState(false);

  function startJourney() {
    setJourneyStarted(true);
  }

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
        <SpaceScene
          journeyStarted={journeyStarted}
          onApproachComplete={() => setEarthReached(true)}
        />
      </Canvas>

      {/* Opening title */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-start justify-center px-6 pt-24 transition-all duration-1000 sm:pt-28 ${
          journeyStarted
            ? "-translate-y-6 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-200/70">
            A journey through scale
          </p>

          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Every discovery begins somewhere.
          </h1>
        </div>
      </div>

      {/* Earth destination cue */}
      <div
        className={`pointer-events-none absolute bottom-24 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center transition-all duration-1000 ${
          earthReached
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-blue-200/60">
          Destination
        </p>

        <h2 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
          Pittsburgh, Pennsylvania
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/50">
          Home is where this journey becomes personal.
        </p>
      </div>

      {/* Skip control */}
      <button
        type="button"
        onClick={finishIntro}
        className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-sm text-white/70 backdrop-blur-md transition hover:border-white/40 hover:text-white"
      >
        Skip intro
      </button>

      {/* Start journey */}
      {!journeyStarted && (
        <button
          type="button"
          onClick={startJourney}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-blue-200/20 bg-black/30 px-6 py-3 text-sm text-blue-100/80 backdrop-blur-md transition hover:border-blue-200/50 hover:bg-blue-400/10 hover:text-white"
        >
          Begin journey ↓
        </button>
      )}

      {/* Temporary continuation control */}
      {earthReached && (
        <button
          type="button"
          onClick={finishIntro}
          className="absolute bottom-8 right-8 rounded-full border border-white/20 bg-black/40 px-5 py-2 text-sm text-white/70 backdrop-blur-md transition hover:border-white/40 hover:text-white"
        >
          Continue →
        </button>
      )}
    </div>
  );
}