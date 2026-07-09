"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
};

export default function TypingText({
  text,
  speed = 50,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}