"use client";

import React, { useEffect, useState } from "react";

type HeroTypingProps = {
  hello: string;
  name: string;
  role: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseAfterComplete?: number;
  pauseBeforeRestart?: number;
};

type Phase = 
  | 'typing-hello'
  | 'typing-name'
  | 'typing-role'
  | 'pausing'
  | 'deleting-role'
  | 'deleting-name'
  | 'deleting-hello'
  | 'restarting';

export default function HeroTyping({
  hello,
  name,
  role,
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseAfterComplete = 2000,
  pauseBeforeRestart = 800,
}: HeroTypingProps) {
  const [phase, setPhase] = useState<Phase>('typing-hello');
  const [helloIndex, setHelloIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing-hello':
        if (helloIndex < hello.length) {
          timeout = setTimeout(() => setHelloIndex(i => i + 1), typingSpeedMs);
        } else {
          timeout = setTimeout(() => setPhase('typing-name'), 300);
        }
        break;

      case 'typing-name':
        if (nameIndex < name.length) {
          timeout = setTimeout(() => setNameIndex(i => i + 1), typingSpeedMs);
        } else {
          timeout = setTimeout(() => setPhase('typing-role'), 300);
        }
        break;

      case 'typing-role':
        if (roleIndex < role.length) {
          timeout = setTimeout(() => setRoleIndex(i => i + 1), typingSpeedMs);
        }
        // À la fin de l'affichage du rôle, ne rien faire (le tout reste affiché)
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, helloIndex, nameIndex, roleIndex, hello.length, name.length, role.length, typingSpeedMs]);

  const showHello = phase === 'typing-hello' || phase === 'typing-name' || phase === 'typing-role';
  const showName = phase === 'typing-name' || phase === 'typing-role';
  const showRole = phase === 'typing-role';
  
  const showHelloCaret = phase === 'typing-hello' && helloIndex < hello.length;
  const showNameCaret = phase === 'typing-name' && nameIndex < name.length;
  const showRoleCaret = phase === 'typing-role' && roleIndex < role.length;

  // Split name to highlight "anni" and "celo"
  const nameParts = name.slice(0, nameIndex).split(/(anni|celo)/);

  return (
    <h1 className="font-roboto items-center font-extralight min-h-[280px] flex flex-col justify-start">
      {showHello && (
        <>
          <span className="text-xl md:text-xl text-zinc-500 dark:text-zinc-400 -mb-4">
            {hello.slice(0, helloIndex)}
            {showHelloCaret && (
              <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-px bg-zinc-600 dark:bg-zinc-400 animate-pulse" />
            )}
          </span>
          <br />
        </>
      )}
      
      {showName && (
        <span className="text-7xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {nameParts.map((part, idx) =>
            part === 'anni' || part === 'celo' ? (
              <span key={idx} className="bg-linear-to-r from-[#e76f38] to-[#e76f38] bg-clip-text text-transparent">
                {part}
              </span>
            ) : (
              <span key={idx}>{part}</span>
            )
          )}
          {showNameCaret && (
            <span className="ml-1 inline-block h-[1.1em] w-0.5 translate-y-px bg-current animate-pulse" />
          )}
          <br />
        </span>
      )}
      
      {showRole && (
        <span className="text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300">
          {role.slice(0, roleIndex)}
          {showRoleCaret && (
            <span className="ml-2 inline-block h-[1.1em] w-0.5 translate-y-px bg-zinc-700 dark:bg-zinc-300 animate-pulse" />
          )}
        </span>
      )}
    </h1>
  );
}

