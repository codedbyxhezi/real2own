import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";
import styles from "./Registrieren.module.css";

type RegistrierenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: RegistrierenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "RegisterPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RegistrierenPage() {
  const t = await getTranslations("RegisterPage");

  return (
    <main className={styles.page}>
      <Image
        src="/images/auth/login-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />

      <div
        className={styles.backgroundOverlay}
        aria-hidden="true"
      />

      <Link
        className={styles.backLink}
        href="/anmelden"
        aria-label={t("backAria")}
      >
        <span aria-hidden="true">←</span>
        {t("back")}
      </Link>

      <section
        className={styles.register}
        aria-labelledby="register-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label={t("homeAria")}
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={72}
            height={72}
            priority
          />
        </Link>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h1 id="register-title">
            {t("title")}
          </h1>

          <p>
            {t("description")}
          </p>
        </div>

        <RegisterForm />
      </section>

      <span className={styles.copyright}>
        © {new Date().getFullYear()} Real2Own
      </span>
    </main>
  );
}