import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ForgotPasswordForm } from "@/components/ForgotPasswordForm/ForgotPasswordForm";
import styles from "./PasswortVergessen.module.css";

type PasswortVergessenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PasswortVergessenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ForgotPasswordPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PasswortVergessenPage() {
  const t = await getTranslations("ForgotPasswordPage");

  return (
    <main className={styles.page}>
      <Link
        className={styles.backLink}
        href="/anmelden"
        aria-label={t("backAria")}
      >
        <span aria-hidden="true">←</span>
        {t("back")}
      </Link>

      <section
        className={styles.card}
        aria-labelledby="forgot-password-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label={t("homeAria")}
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={70}
            height={70}
            priority
          />
        </Link>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h1 id="forgot-password-title">
            {t("title")}
          </h1>

          <p>
            {t("description")}
          </p>
        </div>

        <ForgotPasswordForm />

        <div className={styles.loginLink}>
          <span>
            {t("rememberedPassword")}
          </span>

          <Link href="/anmelden">
            {t("login")}
          </Link>
        </div>
      </section>

      <span className={styles.copyright}>
        © {new Date().getFullYear()} Real2Own
      </span>
    </main>
  );
}