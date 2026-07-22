"use client";

import {
  type FormEvent,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import {
  Link,
  useRouter,
} from "@/i18n/navigation";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  returnTo?: string;
};

type LoginResponse = {
  ok?: boolean;
  code?: string;
};

function getSafeReturnTo(
  returnTo?: string
) {
  if (
    returnTo &&
    returnTo.startsWith(
      "/dashboard"
    ) &&
    !returnTo.startsWith("//")
  ) {
    return returnTo;
  }

  return "/dashboard";
}

export function LoginForm({
  returnTo,
}: LoginFormProps) {
  const t =
    useTranslations("LoginForm");

  const router = useRouter();

  const [pending, setPending] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (pending) {
      return;
    }

    setPending(true);
    setError(null);

    const formData =
      new FormData(
        event.currentTarget
      );

    const username = String(
      formData.get("username") ??
        ""
    ).trim();

    const password = String(
      formData.get("password") ??
        ""
    );

    const remember =
      formData.get("remember") ===
      "on";

    try {
      const response = await fetch(
        "/api/demo-login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            remember,
          }),
        }
      );

      const result =
        (await response
          .json()
          .catch(
            () => null
          )) as LoginResponse | null;

      if (!response.ok) {
        if (
          result?.code ===
          "invalid_credentials"
        ) {
          setError(
            t(
              "errors.invalidCredentials"
            )
          );

          return;
        }

        if (
          result?.code ===
          "not_configured"
        ) {
          setError(
            t(
              "errors.configuration"
            )
          );

          return;
        }

        setError(
          t("errors.generic")
        );

        return;
      }

      router.replace(
        getSafeReturnTo(returnTo)
      );

      router.refresh();
    } catch {
      setError(
        t("errors.generic")
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-busy={pending}
    >
      <label className={styles.field}>
        <span>
          {t("usernameLabel")}
        </span>

        <input
          type="text"
          name="username"
          placeholder={t(
            "usernamePlaceholder"
          )}
          autoComplete="username"
          defaultValue="admin"
          required
          disabled={pending}
          aria-invalid={
            Boolean(error)
          }
          aria-describedby="login-status"
        />
      </label>

      <label className={styles.field}>
        <span>
          {t("passwordLabel")}
        </span>

        <input
          type="password"
          name="password"
          placeholder={t(
            "passwordPlaceholder"
          )}
          autoComplete="current-password"
          required
          disabled={pending}
          aria-invalid={
            Boolean(error)
          }
          aria-describedby="login-status"
        />
      </label>

      <div className={styles.options}>
        <label
          className={styles.remember}
        >
          <input
            type="checkbox"
            name="remember"
            disabled={pending}
          />

          <span>
            {t("remember")}
          </span>
        </label>

        <Link href="/passwort-vergessen">
          {t("forgotPassword")}
        </Link>
      </div>

      <button
        className={styles.submit}
        type="submit"
        aria-describedby="login-status"
      >
        {pending
          ? t("submitting")
          : t("submit")}

        <span aria-hidden="true">
          →
        </span>
      </button>

      <p
        className={styles.status}
        id="login-status"
        role={error ? "alert" : undefined}
        aria-live="polite"
      >
        {error ?? t("demoHint")}
      </p>

      <div className={styles.register}>
        <span>
          {t("noAccount")}
        </span>

        <Link href="/registrieren">
          {t("register")}
        </Link>
      </div>
    </form>
  );
}