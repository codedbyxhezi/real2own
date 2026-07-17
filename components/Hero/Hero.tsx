"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchPanel } from "@/components/SearchPanel/SearchPanel";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "/images/hero/hero-01.webp",
    position: "center 55%",
  },
  {
    src: "/images/hero/hero-02.webp",
    position: "center 52%",
  },
  {
    src: "/images/hero/hero-03.webp",
    position: "center 48%",
  },
  {
    src: "/images/hero/hero-04.webp",
    position: "center 52%",
  },
];

const SLIDE_DURATION = 7000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function updateMotionPreference() {
      setReducedMotion(mediaQuery.matches);
    }

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % slides.length;
      });
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, [reducedMotion]);

  return (
    <section
      className={styles.hero}
      id="top"
      aria-labelledby="hero-title"
    >
      <div className={styles.background} aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={`${styles.slide} ${
              activeIndex === index ? styles.activeSlide : ""
            }`}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index < 2}
              sizes="100vw"
              className={styles.backgroundImage}
              style={{
                objectPosition: slide.position,
              }}
            />
          </div>
        ))}

        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Internationale Immobilienplattform
          </p>

          <h1 id="hero-title">
            Immobilien finden.
            <span>Weltweit zuhause.</span>
          </h1>

          <p className={styles.description}>
            Entdecke Immobilien, Grundstücke und ausgewählte Projektpartner
            in internationalen Märkten.
          </p>
        </div>

        <div className={styles.search}>
          <SearchPanel />
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span key={activeIndex} />
        </div>
      </div>
    </section>
  );
}