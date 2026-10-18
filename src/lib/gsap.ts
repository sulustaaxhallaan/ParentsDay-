"use client";

import { gsap } from "gsap";

/** Отдаёт gsap. Вызывать на клиенте, в useEffect или обработчике. */
export function ensureGsap() {
  return { gsap };
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
