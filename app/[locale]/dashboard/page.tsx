import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  getTranslations,
} from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import { getDemoSession } from "@/lib/demoAuth";
import styles from "./Dashboard.module.css";

type DashboardPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: DashboardPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Dashboard",
  });

  return {
    title: t("metadata.title"),
    description: t(
      "metadata.description"
    ),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DashboardPage({
  params,
}: DashboardPageProps) {
  const { locale } = await params;

  const session =
    await getDemoSession();

  const localePrefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  if (!session) {
    redirect(
      `${localePrefix}/anmelden`
    );
  }

  const t = await getTranslations({
    locale,
    namespace: "Dashboard",
  });

  return (
    <main className={styles.page}>
      <div
        className={styles.glowOne}
        aria-hidden="true"
      />

      <div
        className={styles.glowTwo}
        aria-hidden="true"
      />

      <section
        className={styles.shell}
      >
        <header
          className={styles.topbar}
        >
          <Link
            className={styles.logo}
            href="/"
            aria-label="Real2Own"
          >
            <Image
              src="/images/real2own-logo-transparent.png"
              alt=""
              width={72}
              height={72}
              priority
            />

            <span>real2own</span>
          </Link>

          <div
            className={
              styles.topActions
            }
          >
            <span
              className={
                styles.demoBadge
              }
            >
              {t("demoBadge")}
            </span>

            <form
              action="/api/demo-logout"
              method="post"
            >
              <input
                type="hidden"
                name="redirectTo"
                value={`${localePrefix}/anmelden`}
              />

              <button
                className={
                  styles.logout
                }
                type="submit"
              >
                {t("logout")}
              </button>
            </form>
          </div>
        </header>

        <div className={styles.hero}>
          <p
            className={styles.eyebrow}
          >
            {t("eyebrow")}
          </p>

          <h1>
            {t("welcome", {
              name: session.username,
            })}
          </h1>

          <p
            className={
              styles.description
            }
          >
            {t("description")}
          </p>
        </div>

        <div
          className={styles.cards}
        >
          <article
            className={
              styles.accountCard
            }
          >
            <div
              className={
                styles.cardHeading
              }
            >
              <span>01</span>

              <h2>
                {t("accountTitle")}
              </h2>
            </div>

            <dl
              className={
                styles.accountFacts
              }
            >
              <div>
                <dt>
                  {t("username")}
                </dt>

                <dd>
                  {session.username}
                </dd>
              </div>

              <div>
                <dt>
                  {t("role")}
                </dt>

                <dd>
                  {t("roleValue")}
                </dd>
              </div>

              <div>
                <dt>
                  {t("status")}
                </dt>

                <dd>
                  <span
                    className={
                      styles.activeStatus
                    }
                  />

                  {t("statusValue")}
                </dd>
              </div>
            </dl>
          </article>

          <article
            className={
              styles.listingCard
            }
          >
            <div
              className={
                styles.cardHeading
              }
            >
              <span>02</span>

              <h2>
                {t("listingsTitle")}
              </h2>
            </div>

            <strong
              className={
                styles.listingCount
              }
            >
              0
            </strong>

            <p>
              {t("listingsText")}
            </p>

            <button
              className={
                styles.disabledAction
              }
              type="button"
              disabled
            >
              {t("newListing")}

              <span aria-hidden="true">
                +
              </span>
            </button>

            <small>
              {t("newListingHint")}
            </small>
          </article>
        </div>

        <section
          className={
            styles.quickActions
          }
        >
          <div>
            <p
              className={
                styles.eyebrow
              }
            >
              {t("navigationEyebrow")}
            </p>

            <h2>
              {t("quickActions")}
            </h2>
          </div>

          <div
            className={
              styles.actionLinks
            }
          >
            <Link href="/immobilien">
              <span>
                {t(
                  "browseProperties"
                )}
              </span>

              <Icon
                name="arrow"
                size={16}
              />
            </Link>

            <Link href="/kontakt">
              <span>
                {t("contact")}
              </span>

              <Icon
                name="arrow"
                size={16}
              />
            </Link>

            <Link href="/">
              <span>
                {t("homepage")}
              </span>

              <Icon
                name="arrow"
                size={16}
              />
            </Link>
          </div>
        </section>

        <p
          className={
            styles.demoNotice
          }
        >
          {t("demoNotice")}
        </p>
      </section>
    </main>
  );
}