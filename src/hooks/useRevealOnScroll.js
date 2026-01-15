"use client";

import { useEffect, useRef } from "react";

export default function useRevealOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isMobile = window.innerWidth < 768;

    const children = element.querySelectorAll("[data-stagger]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");

          if (isMobile) {
            children.forEach((child) => {
              const delay = Number(child.dataset.stagger) * 120;
              child.style.transitionDelay = `${delay}ms`;
            });
          }

          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
