"use client";

import {
  useRef,
  useState,
} from "react";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    key: "buyers",
    name: "Amelie & Jonas",
  },
  {
    key: "builder",
    name: "Karim N.",
  },
  {
    key: "developer",
    name: "Elena Rossi",
  },
] as const;

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const locale = useLocale();

  const trackRef =
    useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const formattedScore =
    new Intl.NumberFormat(locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(4.9);

  function scrollToReview(
    index: number
  ) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(
      track.children
    ) as HTMLElement[];

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

    const cards = Array.from(
      track.children
    ) as HTMLElement[];

    if (!cards.length) {
      return;
    }

    const trackCenter =
      track.scrollLeft +
      track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance =
      Number.POSITIVE_INFINITY;

    cards.forEach(
      (card, index) => {
        const cardCenter =
          card.offsetLeft +
          card.clientWidth / 2;

        const distance = Math.abs(
          trackCenter - cardCenter
        );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          closestIndex = index;
        }
      }
    );

    setActiveIndex(
      closestIndex
    );
  }

  function showPrevious() {
    scrollToReview(
      activeIndex === 0
        ? reviews.length - 1
        : activeIndex - 1
    );
  }

  function showNext() {
    scrollToReview(
      activeIndex ===
        reviews.length - 1
        ? 0
        : activeIndex + 1
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
            <div
              className={
                styles.headingCopy
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                {t("eyebrow")}
              </p>

              <h2 id="testimonials-title">
                {t("title")}
              </h2>

              <p
                className={
                  styles.description
                }
              >
                {t("description")}
              </p>
            </div>

            <div
              className={
                styles.summary
              }
            >
              <div
                className={
                  styles.score
                }
              >
                <strong>
                  {formattedScore}
                </strong>

                <span>
                  {t("outOfFive")}
                </span>
              </div>

              <div>
                <div
                  className={
                    styles.stars
                  }
                  aria-label={t(
                    "starsAria",
                    {
                      score:
                        formattedScore,
                    }
                  )}
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p>
                  {t("ratingText")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          className={
            styles.carousel
          }
          role="region"
          aria-roledescription={t(
            "carouselRole"
          )}
          aria-label={t(
            "carouselAria"
          )}
        >
          <div
            className={styles.track}
            ref={trackRef}
            onScroll={
              handleScroll
            }
          >
            {reviews.map(
              (review, index) => (
                <Reveal
                  className={
                    styles.slide
                  }
                  delay={
                    index * 70
                  }
                  key={
                    review.key
                  }
                >
                  <figure
                    className={
                      styles.review
                    }
                  >
                    <div
                      className={
                        styles.reviewHeader
                      }
                    >
                      <span
                        className={
                          styles.index
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className={
                          styles.verified
                        }
                      >
                        <Icon
                          name="check"
                          size={13}
                        />

                        {t(
                          "verified"
                        )}
                      </span>
                    </div>

                    <blockquote>
                      <p>
                        {t(
                          `reviews.${review.key}.quote`
                        )}
                      </p>
                    </blockquote>

                    <figcaption>
                      <span>
                        <strong>
                          {
                            review.name
                          }
                        </strong>

                        <small>
                          {t(
                            `reviews.${review.key}.role`
                          )}{" "}
                          ·{" "}
                          {t(
                            `reviews.${review.key}.location`
                          )}
                        </small>
                      </span>

                      <span
                        className={
                          styles.quoteMark
                        }
                        aria-hidden="true"
                      >
                        “
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              )
            )}
          </div>

          <div
            className={
              styles.mobileControls
            }
          >
            <div
              className={
                styles.dots
              }
              aria-label={t(
                "selectReview"
              )}
            >
              {reviews.map(
                (review, index) => (
                  <button
                    className={
                      activeIndex ===
                      index
                        ? styles.activeDot
                        : undefined
                    }
                    key={
                      review.key
                    }
                    type="button"
                    aria-label={t(
                      "showReview",
                      {
                        number:
                          index +
                          1,
                      }
                    )}
                    aria-current={
                      activeIndex ===
                      index
                        ? "true"
                        : undefined
                    }
                    onClick={() =>
                      scrollToReview(
                        index
                      )
                    }
                  />
                )
              )}
            </div>

            <div
              className={
                styles.arrows
              }
            >
              <button
                className={
                  styles.previous
                }
                type="button"
                aria-label={t(
                  "previous"
                )}
                onClick={
                  showPrevious
                }
              >
                <Icon
                  name="arrow"
                  size={17}
                />
              </button>

              <button
                type="button"
                aria-label={t(
                  "next"
                )}
                onClick={
                  showNext
                }
              >
                <Icon
                  name="arrow"
                  size={17}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}