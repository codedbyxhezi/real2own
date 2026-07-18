import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./DestinationGrid.module.css";

const destinations = [
  {
    key: "berlin",
    listings: 6240,
    image: "/images/berlin.png",
    position: "center 45%",
    className: styles.featured,
  },
  {
    key: "dubai",
    listings: 4870,
    image: "/images/dubai-marina.png",
    position: "center 52%",
    className: styles.vertical,
  },
  {
    key: "mallorca",
    listings: 2130,
    image: "/images/mallorca.png",
    position: "center 58%",
    className: "",
  },
  {
    key: "lisbon",
    listings: 1940,
    image: "/images/lisbon.png",
    position: "center 48%",
    className: "",
  },
] as const;

const localeMap = {
  de: "de-DE",
  en: "en-GB",
  es: "es-ES",
} as const;

export function DestinationGrid() {
  const t = useTranslations("DestinationGrid");
  const locale = useLocale();

  const numberLocale =
    localeMap[locale as keyof typeof localeMap] ?? "de-DE";

  return (
    <section
      className={`section ${styles.section}`}
      id="international"
      aria-label={t("ariaLabel")}
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              align="center"
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {destinations.map((destination, index) => {
            const city = t(
              `destinations.${destination.key}.city`
            );

            const country = t(
              `destinations.${destination.key}.country`
            );

            const formattedListings =
              new Intl.NumberFormat(numberLocale).format(
                destination.listings
              );

            return (
              <Reveal
                className={destination.className}
                delay={index * 70}
                key={destination.key}
              >
                <Link
                  className={styles.card}
                  href="/international"
                  aria-label={t("discoverAria", {
                    city,
                  })}
                >
                  <Image
                    src={destination.image}
                    alt={t("imageAlt", {
                      city,
                    })}
                    fill
                    quality={88}
                    sizes="
                      (max-width: 680px) calc(100vw - 28px),
                      (max-width: 1000px) calc(50vw - 32px),
                      40vw
                    "
                    className={styles.image}
                    style={{
                      objectPosition: destination.position,
                    }}
                  />

                  <div className={styles.overlay} />

                  <div
                    className={styles.index}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.cardTop}>
                    <span>
                      {t("listingCount", {
                        count: formattedListings,
                      })}
                    </span>

                    <span
                      className={styles.arrow}
                      aria-hidden="true"
                    >
                      <Icon name="arrow" size={17} />
                    </span>
                  </div>

                  <div className={styles.cardCopy}>
                    <p>{country}</p>

                    <h3>{city}</h3>

                    <span className={styles.discover}>
                      {t("discover")}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}