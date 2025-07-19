import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Hi, I'm Ignacio!",
  "I am driven by curiosity.",
  "I am passionate about tech.",
  "I build end to end solutions.",
  "I am an engineer.",
  "I am obsessed with elegant code.",
  "I am a leader.",
  "I am crafting the future with tech.",
];

type TypeWriterProps = {
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
};

const TypeWriter: React.FC<TypeWriterProps> = ({
  className = "",
  typingSpeed = 125,
  deletingSpeed = 125,
  pauseTime = 3000,
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex <= currentPhrase.length) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex((prev) => prev - 1);
      }, pauseTime);
    } else if (isDeleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, phraseIndex, typingSpeed, deletingSpeed, pauseTime]);

  const currentPhrase = phrases[phraseIndex];
  const displayedText = currentPhrase.slice(0, charIndex);

  return (
    <h1 className={`text-5xl font-semibold text-center text-white leading-[1.5] ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypeWriter;
