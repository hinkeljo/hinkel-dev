"use client";

import { useEffect } from "react";

export default function AppBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // keep track of the cursor position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        cursor.style.left = `${event.clientX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${event.clientY - cursor.offsetHeight / 2}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex w-full min-h-screen flex-col items-center">
      <div
        id="cursor"
        className="fixed w-64 h-64 bg-primary rounded-full pointer-events-none opacity-50 filter blur-[12rem] animate-cursor-breath"
      ></div>
      {children}
    </div>
  );
}
