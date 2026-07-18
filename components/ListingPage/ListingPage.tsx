import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import { ListingExplorer } from "@/components/ListingExplorer/ListingExplorer";
import type { ListingProperty } from "@/types/property";
import styles from "./ListingPage.module.css";

type ListingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  resultLabel: string;
  properties: ListingProperty[];
};

export function ListingPage({
  eyebrow,
  title,
  description,
  resultLabel,
  properties,
}: ListingPageProps) {
  const t = useTranslations("ListingPage");

  return (
    <>
      <section
        className={styles.hero}
        aria-labelledby="listing-page-title"
      >
        <div className={`container ${styles.heroContainer}`}>
          <p className={styles.eyebrow}>
            {eyebrow}
          </p>

          <h1 id="listing-page-title">
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>
        </div>
      </section>

      <ListingExplorer
        resultLabel={resultLabel}
        properties={properties}
      />

      <section
        className={styles.cta}
        aria-label={t("ctaAria")}
      >
        <div className={`container ${styles.ctaContainer}`}>
          <div>
            <p className={styles.ctaEyebrow}>
              {t("ctaEyebrow")}
            </p>

            <h2>
              {t("ctaTitle")}
            </h2>
          </div>

          <div className={styles.ctaCopy}>
            <p>
              {t("ctaDescription")}
            </p>

            <Link href="/kontakt#kontaktformular">
              {t("ctaAction")}

              <Icon
                name="arrow"
                size={17}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}