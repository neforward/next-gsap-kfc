"use client";

import { animatePageIn } from "../utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen z-20 fixed top-0 left-0 w-1/3"
      />
      <div
        id="banner-2"
        className="min-h-screen z-20 fixed top-0 left-1/3 w-1/3"
      />
      <div
        id="banner-3"
        className="min-h-screen z-20 fixed top-0 left-2/3 w-1/3"
      />

      {children}
    </div>
  );
}
