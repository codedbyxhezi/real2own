"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    quote:
      "Wir konnten Immobilien in Deutschland, Portugal und Spanien erstmals sinnvoll miteinander vergleichen. Das hat unsere Entscheidung deutlich vereinfacht.",
    name: "Amelie & Jonas",
    role: "Private Käufer",
    location: "München",
  },
  {
    quote:
      "Grundstückssuche und passende Baupartner an einem Ort zu finden, war für unser Projekt ein entscheidender Vorteil.",
    name: "Karim N.",
    role: "Privater Bauherr",
    location: "Hamburg",
  },
  {
    quote:
      "Unsere Projekte lassen sich international professionell präsentieren. Gleichzeitig erreichen wir gezielter passende Interessenten.",
    name: "Elena Rossi",
    role: "Projektentwicklerin",
    location: "Mailand",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToReview(index: number) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(track.children) as HTMLElement[];
    const card = cards[index];

    if (!card) {
      return;
    }

    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }

  function handleScroll() {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) {
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(trackCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  function showPrevious() {
    scrollToReview(
      activeIndex === 0 ? reviews.length - 1 : activeIndex - 1,
    );
  }

  function showNext() {
    scrollToReview(
      activeIndex === reviews.length - 1 ? 0 : activeIndex + 1,
    );
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <div className={styles.headingCopy}>
              <p className={styles.eyebrow}>Kundenstimmen</p>

              <h2 id="testimonials-title">
                Erfahrungen, auf die es ankommt.
              </h2>

              <p className={styles.description}>
                Käufer, Bauherren und Projektpartner über ihre Zusammenarbeit
                mit Real2Own.
              </p>
            </div>

            <div className={styles.summary}>
              <div className={styles.score}>
                <strong>4,9</strong>
                <span>von 5</span>
              </div>

              <div>
                <div className={styles.stars} aria-label="4,9 von 5 Sternen">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p>Basierend auf verifizierten Rückmeldungen</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="Karussell"
          aria-label="Erfahrungen unserer Kunden"
        >
          <div
            className={styles.track}
            ref={trackRef}
            onScroll={handleScroll}
          >
            {reviews.map((review, index) => (
              <Reveal
                className={styles.slide}
                delay={index * 70}
                key={review.name}
              >
                <figure className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.verified}>
                      <Icon name="check" size={13} />
                      Verifiziert
                    </span>
                  </div>

                  <blockquote>
                    <p>{review.quote}</p>
                  </blockquote>

                  <figcaption>
                    <span>
                      <strong>{review.name}</strong>
                      <small>
                        {review.role} · {review.location}
                      </small>
                    </span>

                    <span className={styles.quoteMark} aria-hidden="true">
                      “
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className={styles.mobileControls}>
            <div className={styles.dots} aria-label="Kundenstimme auswählen">
              {reviews.map((review, index) => (
                <button
                  className={
                    activeIndex === index ? styles.activeDot : undefined
                  }
                  key={review.name}
                  type="button"
                  aria-label={`Kundenstimme ${index + 1} anzeigen`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => scrollToReview(index)}
                />
              ))}
            </div>

            <div className={styles.arrows}>
              <button
                className={styles.previous}
                type="button"
                aria-label="Vorherige Kundenstimme"
                onClick={showPrevious}
              >
                <Icon name="arrow" size={17} />
              </button>

              <button
                type="button"
                aria-label="Nächste Kundenstimme"
                onClick={showNext}
              >
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}