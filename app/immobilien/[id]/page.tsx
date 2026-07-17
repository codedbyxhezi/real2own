import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import {
  getPropertyById,
  propertyCatalog,
} from "@/data/propertyCatalog";
import styles from "./PropertyDetail.module.css";

type PropertyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return propertyCatalog.map((property) => ({
    id: String(property.id),
  }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: "Immobilie nicht gefunden",
    };
  }

  return {
    title: property.title,
    description: `${property.title} in ${property.location}. ${property.price}.`,
  };
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const mailSubject = encodeURIComponent(
    `Anfrage zur Immobilie ${property.id}: ${property.title}`
  );

  const mailBody = encodeURIComponent(
    [
      "Guten Tag,",
      "",
      `ich interessiere mich für folgendes Angebot:`,
      "",
      `${property.title}`,
      `${property.location}`,
      `Objektnummer: R2O-${property.id}`,
      "",
      "Bitte senden Sie mir weitere Informationen.",
      "",
      "Freundliche Grüße",
    ].join("\n")
  );

  return (
    <>
      <Header />

      <main id="top">
        <section className={styles.hero}>
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Startseite</Link>
              <span>/</span>

              <Link
                href={
                  property.category === "Miete"
                    ? "/immobilien/mieten"
                    : property.category === "Grundstück"
                      ? "/grundstuecke"
                      : property.category === "Neubauprojekt"
                        ? "/neubauprojekte"
                        : "/immobilien/kaufen"
                }
              >
                {property.category}
              </Link>

              <span>/</span>
              <span>R2O-{property.id}</span>
            </div>

            <div className={styles.heroContent}>
              <div>
                <div className={styles.meta}>
                  <span>{property.category}</span>
                  <span>{property.location}</span>

                  {property.label && (
                    <span>{property.label}</span>
                  )}
                </div>

                <h1>{property.title}</h1>
              </div>

              <div className={styles.heroPrice}>
                <span>Angebotspreis</span>
                <strong>{property.price}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.summary}>
          <div className={`container ${styles.summaryContainer}`}>
            <dl className={styles.facts}>
              <div>
                <dt>Objektart</dt>
                <dd>{property.propertyType}</dd>
              </div>

              <div>
                <dt>Fläche</dt>
                <dd>{property.area}</dd>
              </div>

              <div>
                <dt>Einheiten</dt>
                <dd>{property.rooms}</dd>
              </div>

              <div>
                <dt>Objektnummer</dt>
                <dd>R2O-{property.id}</dd>
              </div>
            </dl>

            <div className={styles.actions}>
              <a
                className={styles.primaryAction}
                href={`mailto:info@real2own.com?subject=${mailSubject}&body=${mailBody}`}
              >
                Immobilie anfragen
                <Icon name="arrow" size={17} />
              </a>

              <Link
                className={styles.secondaryAction}
                href="/kontakt#kontaktformular"
              >
                Beratung anfragen
              </Link>
            </div>
          </div>
        </section>

        <section
          className={styles.gallery}
          aria-label="Bilder der Immobilie"
        >
          <div className={`container ${styles.galleryGrid}`}>
            {property.gallery.map((image, index) => (
              <div
                className={
                  index === 0
                    ? styles.galleryMain
                    : styles.galleryItem
                }
                key={`${image}-${index}`}
              >
                <Image
                  src={image}
                  alt={`${property.title} – Ansicht ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 760px) 100vw, 66vw"
                      : "(max-width: 760px) 100vw, 33vw"
                  }
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.information}>
          <div className={`container ${styles.informationContainer}`}>
            <div className={styles.description}>
              <p className={styles.eyebrow}>
                Das Angebot
              </p>

              <h2>
                Raum für neue Perspektiven.
              </h2>

              <p className={styles.location}>
                {property.location}
              </p>

              <p className={styles.descriptionText}>
                {property.description}
              </p>

              <p className={styles.disclaimer}>
                Die dargestellten Informationen dienen als
                unverbindliche Vorabinformation. Flächen, Preise,
                Verfügbarkeiten und Ausstattungsmerkmale können sich
                ändern und werden vor einer Vermittlung gesondert
                bestätigt.
              </p>
            </div>

            <div className={styles.featureSection}>
              <p className={styles.eyebrow}>
                Leistungen und Merkmale
              </p>

              <ul className={styles.features}>
                {property.features.map((feature, index) => (
                  <li key={feature}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={`container ${styles.contactContainer}`}>
            <div>
              <p className={styles.contactEyebrow}>
                Persönliche Beratung
              </p>

              <h2>
                Interesse an diesem Angebot?
              </h2>
            </div>

            <div className={styles.contactCopy}>
              <p>
                Wir senden dir weitere Informationen und stimmen
                einen persönlichen Gesprächstermin oder eine
                Besichtigung mit dir ab.
              </p>

              <a href="tel:+491791415281">
                +49 179 14 15 281
              </a>

              <a href="mailto:info@real2own.com">
                info@real2own.com
              </a>

              <Link href="/kontakt#kontaktformular">
                Anfrage senden
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}