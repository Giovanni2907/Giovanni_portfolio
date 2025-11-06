"use client";

import React, { useEffect, useState } from "react";

type TypingNameProps = {
  name: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
  caretClassName?: string;
  once?: boolean; // If true, only type once without deleting
};

export default function TypingName({
  name,
  typingSpeedMs = 80,
  deletingSpeedMs = 40,
  pauseMs = 1000,
  className,
  caretClassName,
  once = false,
}: TypingNameProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isKeystroking, setIsKeystroking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const isNameComplete = !isDeleting && charIndex === name.length;
    const isNameEmpty = isDeleting && charIndex === 0;

    // If once mode and name is complete, stop
    if (once && isNameComplete) {
      setIsComplete(true);
      return;
    }

    let timeout = typingSpeedMs;

    if (isNameComplete || isNameEmpty) {
      timeout = pauseMs;
    } else if (isDeleting) {
      timeout = deletingSpeedMs;
    }

    const id = setTimeout(() => {
      setIsKeystroking(true);
      if (!isDeleting) {
        if (charIndex < name.length) {
          setCharIndex((c) => c + 1);
        } else {
          if (!once) {
            setIsDeleting(true);
          }
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
        }
      }

      const k = setTimeout(() => setIsKeystroking(false), 120);
      return () => clearTimeout(k);
    }, timeout);

    return () => clearTimeout(id);
  }, [charIndex, deletingSpeedMs, isDeleting, name.length, once, pauseMs, typingSpeedMs]);

  const current = name.slice(0, charIndex);
  
  // Split the current text to highlight "anni" and "celo"
  const parts = current.split(/(anni|celo)/);
  const showCaret = !once || !isComplete;

  return (
    <span className={className} aria-live="polite" aria-label={name}>
      {parts.map((part, idx) =>
        part === 'anni' || part === 'celo' ? (
          <span key={idx} className="bg-linear-to-r from-[#e76f38] to-[#e76f38] bg-clip-text text-transparent">
            {part}
          </span>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
      {showCaret && (
        <span
          className={
            caretClassName ??
            "ml-1 inline-block h-[1.1em] w-0.5 translate-y-px bg-current animate-pulse"
          }
        />
      )}
    </span>
  );
}

