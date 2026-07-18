"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import type { AppLocale } from "@/i18n/routing";
import styles from "./Header.module.css";

const navItems = [
  {
    key: "buy",
    href: "/immobilien/kaufen",
  },
  {
    key: "rent",
    href: "/immobilien/mieten",
  },
  {
    key: "land",
    href: "/grundstuecke",
  },
  {
    key: "developments",
    href: "/neubauprojekte",
  },
  {
    key: "constructionPartners",
    href: "/baupartner",
  },
  {
    key: "international",
    href: "/international",
  },
] as const;

const languages = [
  {
    code: "de",
    shortLabel: "DE",
    label: "Deutsch",
    flag: "/images/flags/de.svg",
  },
  {
    code: "en",
    shortLabel: "EN",
    label: "English",
    flag: "/images/flags/en.svg",
  },
  {
    code: "es",
    shortLabel: "ES",
    label: "Español",
    flag: "/images/flags/es.svg",
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] =
    useState(false);

  const languageSwitcherRef =
    useRef<HTMLDivElement>(null);

  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("Header");

  const selectedLanguage =
    languages.find(
      (language) => language.code === locale
    ) ?? languages[0];

  const availableLanguages = languages.filter(
    (language) => language.code !== locale
  );

  function closeMenu() {
    setOpen(false);
  }

  function isActiveRoute(href: string) {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  function selectLanguage(
    nextLocale: AppLocale
  ) {
    setLanguageOpen(false);
    setOpen(false);

    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setOpen(false);
        setLanguageOpen(false);
      }
    }

    function handlePointerDown(
      event: PointerEvent
    ) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (
        languageSwitcherRef.current &&
        !languageSwitcherRef.current.contains(
          target
        )
      ) {
        setLanguageOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={`container ${styles.inner}`}
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Real2Own"
          onClick={closeMenu}
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own Logo"
            width={128}
            height={128}
            sizes="(max-width: 480px) 48px, (max-width: 800px) 52px, 62px"
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav
          className={styles.desktopNav}
          aria-label={t("mainNavigation")}
        >
          {navItems.map((item) => {
            const isActive =
              isActiveRoute(item.href);

            return (
              <Link
                className={
                  isActive
                    ? styles.activeLink
                    : undefined
                }
                href={item.href}
                key={item.key}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <div
            ref={languageSwitcherRef}
            className={`${
              styles.languageSwitcher
            } ${
              languageOpen
                ? styles.languageSwitcherOpen
                : ""
            }`}
            onMouseEnter={() =>
              setLanguageOpen(true)
            }
            onMouseLeave={() =>
              setLanguageOpen(false)
            }
          >
            <button
              className={
                styles.languageCurrent
              }
              type="button"
              aria-label={t(
                "currentLanguage",
                {
                  language:
                    selectedLanguage.label,
                }
              )}
              aria-haspopup="menu"
              aria-expanded={languageOpen}
              onClick={() =>
                setLanguageOpen(
                  (current) => !current
                )
              }
            >
              <span
                className={
                  styles.languageFlagWrap
                }
              >
                <Image
                  className={
                    styles.languageFlagImage
                  }
                  src={selectedLanguage.flag}
                  alt=""
                  width={30}
                  height={20}
                />
              </span>

              <span
                className={
                  styles.languageCode
                }
              >
                {selectedLanguage.shortLabel}
              </span>

              <span
                className={
                  styles.languageChevron
                }
                aria-hidden="true"
              >
                <Icon
                  name="chevron"
                  size={13}
                />
              </span>
            </button>

            <div
              className={
                styles.languageMenu
              }
              role="menu"
              aria-label={t(
                "languageSelection"
              )}
            >
              {availableLanguages.map(
                (language) => (
                  <button
                    className={
                      styles.languageOption
                    }
                    type="button"
                    role="menuitem"
                    key={language.code}
                    onClick={() =>
                      selectLanguage(
                        language.code
                      )
                    }
                  >
                    <span
                      className={
                        styles.languageFlagWrap
                      }
                    >
                      <Image
                        className={
                          styles.languageFlagImage
                        }
                        src={language.flag}
                        alt=""
                        width={30}
                        height={20}
                      />
                    </span>

                    <span
                      className={
                        styles.languageName
                      }
                    >
                      {language.label}
                    </span>

                    <span
                      className={
                        styles.optionCode
                      }
                    >
                      {language.shortLabel}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          <Link
            className={styles.login}
            href="/anmelden"
          >
            {t("login")}
          </Link>

          <Link
            className={
              styles.listingButton
            }
            href="/immobilie-anbieten#anfrage"
            onClick={closeMenu}
          >
            {t("listProperty")}
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={
              open
                ? t("closeMenu")
                : t("openMenu")
            }
            onClick={() =>
              setOpen(
                (currentOpen) =>
                  !currentOpen
              )
            }
          >
            <Icon
              name={open ? "x" : "menu"}
              size={23}
            />
          </button>
        </div>
      </div>

      <div
        className={`${
          styles.mobilePanel
        } ${
          open
            ? styles.mobilePanelOpen
            : ""
        }`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav
          className="container"
          aria-label={t(
            "mobileNavigation"
          )}
        >
          {navItems.map((item) => {
            const isActive =
              isActiveRoute(item.href);

            return (
              <Link
                className={
                  isActive
                    ? styles.activeLink
                    : undefined
                }
                href={item.href}
                key={item.key}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
              >
                <span>
                  {t(item.key)}
                </span>

                <Icon
                  name="chevron"
                  size={18}
                />
              </Link>
            );
          })}

          <Link
            className={
              styles.mobileLogin
            }
            href="/anmelden"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            <span>{t("login")}</span>

            <span
              className={
                styles.mobileLoginIcon
              }
              aria-hidden="true"
            >
              <Icon
                name="arrow"
                size={16}
              />
            </span>
          </Link>

          <Link
            className={
              styles.mobileCta
            }
            href="/immobilie-anbieten#anfrage"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            {t("listPropertyLong")}
          </Link>
        </nav>
      </div>
    </header>
  );
}