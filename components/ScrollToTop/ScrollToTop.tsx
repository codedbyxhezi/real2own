"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/Icon/Icon";
import styles from "./ScrollToTop.module.css";

const VISIBILITY_OFFSET = 500;

export function ScrollToTop() {
  const t = useTranslations("ScrollToTop");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    function updateVisibility() {
      setVisible(window.scrollY > VISIBILITY_OFFSET);
    }

    function handleScroll() {
      window.cancelAnimationFrame(animationFrame);

      animationFrame =
        window.requestAnimationFrame(
          updateVisibility
        );
    }

    updateVisibility();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  function scrollToTop() {
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion
        ? "auto"
        : "smooth",
    });
  }

  return (
    <button
      className={`${styles.button} ${
        visible
          ? styles.visible
          : ""
      }`}
      type="button"
      aria-label={t("ariaLabel")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <span aria-hidden="true">
        <Icon
          name="arrow"
          size={17}
        />
      </span>
    </button>
  );
}