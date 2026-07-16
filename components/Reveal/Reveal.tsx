"use client";

import { type CSSProperties, type PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Reveal.module.css";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

type RevealStyle = CSSProperties & { "--reveal-delay": string };

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(styles.visible);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: RevealStyle = { "--reveal-delay": `${delay}ms` };

  return (
    <div className={`${styles.reveal} ${className}`} ref={ref} style={style}>
      {children}
    </div>
  );
}
