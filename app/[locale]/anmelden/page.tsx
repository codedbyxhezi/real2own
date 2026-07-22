import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  getTranslations,
} from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import { getDemoSession } from "@/lib/demoAuth";
import styles from "./Anmelden.module.css";

type AnmeldenPageProps = {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<{
    returnTo?:
      | string
      | string[];
  }>;
};

export async function generateMetadata({
  params,
}: AnmeldenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "LoginPage",
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

export default async function AnmeldenPage({
  params,
  searchParams,
}: AnmeldenPageProps) {
  const [
    { locale },
    query,
    session,
  ] = await Promise.all([
    params,
    searchParams,
    getDemoSession(),
  ]);

  const localePrefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  if (session) {
    redirect(
      `${localePrefix}/dashboard`
    );
  }

  const t = await getTranslations({
    locale,
    namespace: "LoginPage",
  });

  const rawReturnTo =
    query.returnTo;

  const returnTo =
    Array.isArray(rawReturnTo)
      ? rawReturnTo[0]
      : rawReturnTo;

  return (
    <main className={styles.page}>
      <Image
        src="/images/auth/login-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={
          styles.backgroundImage
        }
      />

      <div
        className={
          styles.backgroundOverlay
        }
        aria-hidden="true"
      />

      <Link
        className={styles.backLink}
        href="/"
        aria-label={t("backAria")}
      >
        <span aria-hidden="true">
          ←
        </span>

        {t("back")}
      </Link>

      <section
        className={styles.login}
        aria-labelledby="login-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label={t("homeAria")}
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={92}
            height={92}
            priority
          />
        </Link>

        <div
          className={
            styles.heading
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            {t("eyebrow")}
          </p>

          <h1 id="login-title">
            {t("title")}
          </h1>

          <p>
            {t("description")}
          </p>
        </div>

        <LoginForm
          returnTo={returnTo}
        />

        <p
          className={styles.legal}
        >
          {t("legalBefore")}{" "}

          <Link href="/datenschutz">
            {t("privacy")}
          </Link>

          {t("legalAfter")}
        </p>
      </section>

      <span
        className={
          styles.copyright
        }
      >
        © {new Date().getFullYear()}{" "}
        Real2Own
      </span>
    </main>
  );
}