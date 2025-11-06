"use client";

import React, { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
  caretClassName?: string;
  once?: boolean; // If true, only type once without deleting
};

export default function TypingText({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 40,
  pauseMs = 1000,
  className,
  caretClassName,
  once = false,
}: TypingTextProps) {
  const phrases = useMemo(() => (words.length > 0 ? words : [""]), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isKeystroking, setIsKeystroking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentWord = phrases[wordIndex];
    const isWordComplete = !isDeleting && charIndex === currentWord.length;
    const isWordEmpty = isDeleting && charIndex === 0;

    // If once mode and word is complete, stop
    if (once && isWordComplete) {
      setIsComplete(true);
      return;
    }

    let timeout = typingSpeedMs;

    if (isWordComplete || isWordEmpty) {
      timeout = pauseMs;
    } else if (isDeleting) {
      timeout = deletingSpeedMs;
    }

    const id = setTimeout(() => {
      setIsKeystroking(true);
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
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
          setWordIndex((i) => (i + 1) % phrases.length);
        }
      }

      // brief visual feedback on each keystroke
      const k = setTimeout(() => setIsKeystroking(false), 120);
      return () => clearTimeout(k);
    }, timeout);

    return () => clearTimeout(id);
  }, [charIndex, deletingSpeedMs, isDeleting, once, pauseMs, phrases, typingSpeedMs, wordIndex]);

  const current = phrases[wordIndex]?.slice(0, charIndex) ?? "";
  const showCaret = !once || !isComplete;

  return (
    <span className={className} aria-live="polite" aria-label={phrases[wordIndex]}>
      <span className={isKeystroking ? "opacity-100" : "opacity-100 transition-opacity"}>{current}</span>
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


