import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import styles from "./Anmelden.module.css";

type AnmeldenPageProps = {
  params: Promise<{
    locale: string;
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
    description: t("metadata.description"),
  };
}

export default async function AnmeldenPage() {
  const t = await getTranslations("LoginPage");

  return (
    <main className={styles.page}>
      <Link
        className={styles.backLink}
        href="/"
        aria-label={t("backAria")}
      >
        <span aria-hidden="true">←</span>
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

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h1 id="login-title">
            {t("title")}
          </h1>

          <p>
            {t("description")}
          </p>
        </div>

        <LoginForm />

        <div className={styles.register}>
          <span>
            {t("noAccount")}
          </span>

          <Link href="/registrieren">
            {t("createAccount")}
          </Link>
        </div>

        <p className={styles.legal}>
          {t("legalBefore")}{" "}

          <Link href="/datenschutz">
            {t("privacy")}
          </Link>

          {t("legalAfter")}
        </p>
      </section>

      <span className={styles.copyright}>
        © {new Date().getFullYear()} Real2Own
      </span>
    </main>
  );
}