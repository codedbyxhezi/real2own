"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import type { AppLocale } from "@/i18n/routing";
import styles from "./Header.module.css";

type HeaderClientProps = {
  accountName: string | null;
};

const navigationItems = [
  {
    key: "properties",
    labelKey: "propertiesMenu",
    href: "/immobilien",
  },
  {
    key: "constructionPartners",
    labelKey: "constructionPartners",
    href: "/baupartner",
  },
  {
    key: "about",
    labelKey: "about",
    href: "/ueber-uns",
  },
  {
    key: "contact",
    labelKey: "contact",
    href: "/kontakt",
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

export function HeaderClient({
  accountName,
}: HeaderClientProps) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const headerRef =
    useRef<HTMLElement>(null);

  const locale =
    useLocale() as AppLocale;

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Header");

  const accountHref = accountName
    ? "/dashboard"
    : "/anmelden";

  const accountLabel =
    accountName ?? t("login");

  const selectedLanguage =
    languages.find(
      (language) =>
        language.code === locale
    ) ?? languages[0];

  const availableLanguages =
    languages.filter(
      (language) =>
        language.code !== locale
    );

  function isActiveRoute(
    href: string
  ) {
    return (
      pathname === href ||
      pathname.startsWith(
        `${href}/`
      )
    );
  }

  function closeNavigation() {
    setMobileOpen(false);
    setLanguageOpen(false);
  }

  function selectLanguage(
    nextLocale: AppLocale
  ) {
    closeNavigation();

    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  useEffect(() => {
    setMobileOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setMobileOpen(false);
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
        headerRef.current &&
        !headerRef.current.contains(
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
    <header
      ref={headerRef}
      className={styles.header}
    >
      <div
        className={`container ${styles.inner}`}
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Real2Own"
          onClick={closeNavigation}
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own Logo"
            width={128}
            height={128}
            sizes="(max-width: 480px) 46px, (max-width: 1020px) 52px, 60px"
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav
          className={styles.desktopNav}
          aria-label={t(
            "mainNavigation"
          )}
        >
          {navigationItems.map(
            (item) => {
              const active =
                isActiveRoute(
                  item.href
                );

              return (
                <Link
                  className={[
                    styles.navTrigger,
                    active
                      ? styles.navTriggerActive
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  href={item.href}
                  key={item.key}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  onClick={
                    closeNavigation
                  }
                >
                  {t(item.labelKey)}
                </Link>
              );
            }
          )}
        </nav>

        <div
          className={styles.actions}
        >
          <div
            className={[
              styles.languageSwitcher,
              languageOpen
                ? styles.languageSwitcherOpen
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
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
              aria-expanded={
                languageOpen
              }
              onClick={() =>
                setLanguageOpen(
                  (current) =>
                    !current
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
                  src={
                    selectedLanguage.flag
                  }
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
                {
                  selectedLanguage.shortLabel
                }
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
                      {
                        language.shortLabel
                      }
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          <Link
            className={styles.login}
            href={accountHref}
            aria-current={
              accountName &&
              pathname.startsWith(
                "/dashboard"
              )
                ? "page"
                : undefined
            }
            onClick={closeNavigation}
          >
            {accountLabel}
          </Link>

          <button
            className={
              styles.menuButton
            }
            type="button"
            aria-expanded={
              mobileOpen
            }
            aria-controls="mobile-navigation"
            aria-label={
              mobileOpen
                ? t("closeMenu")
                : t("openMenu")
            }
            onClick={() => {
              setLanguageOpen(false);

              setMobileOpen(
                (current) =>
                  !current
              );
            }}
          >
            <Icon
              name={
                mobileOpen
                  ? "x"
                  : "menu"
              }
              size={23}
            />
          </button>
        </div>
      </div>

      <div
        className={[
          styles.mobilePanel,
          mobileOpen
            ? styles.mobilePanelOpen
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
      >
        <nav
          className={`container ${styles.mobileNav}`}
          aria-label={t(
            "mobileNavigation"
          )}
        >
          <div>
            {navigationItems.map(
              (item) => {
                const active =
                  isActiveRoute(
                    item.href
                  );

                return (
                  <div
                    className={[
                      styles.mobileSection,
                      active
                        ? styles.mobileSectionActive
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={item.key}
                  >
                    <Link
                      className={
                        styles.mobileSectionButton
                      }
                      href={item.href}
                      tabIndex={
                        mobileOpen
                          ? 0
                          : -1
                      }
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={
                        closeNavigation
                      }
                    >
                      <span>
                        {t(
                          item.labelKey
                        )}
                      </span>

                      <span
                        className={
                          styles.mobileSectionChevron
                        }
                        aria-hidden="true"
                      >
                        <Icon
                          name="arrow"
                          size={16}
                        />
                      </span>
                    </Link>
                  </div>
                );
              }
            )}
          </div>

          <div
            className={
              styles.mobileActions
            }
          >
            <Link
              className={
                styles.mobileLogin
              }
              href={accountHref}
              tabIndex={
                mobileOpen
                  ? 0
                  : -1
              }
              aria-current={
                accountName &&
                pathname.startsWith(
                  "/dashboard"
                )
                  ? "page"
                  : undefined
              }
              onClick={
                closeNavigation
              }
            >
              <span>
                {accountLabel}
              </span>

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
          </div>
        </nav>
      </div>
    </header>
  );
}