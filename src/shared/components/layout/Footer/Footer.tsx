import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import { routePaths } from "@/shared/config";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.icon} />

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("about")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("ourBranches")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("changelog")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("quickLinks")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("helpSupport")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("termsOfService")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("security")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("company")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("social")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("facebook")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("instagram")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("twitter")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {t("copyright", { year: "2026", company: "Ra.St.Iv" })}
      </div>
    </footer>
  );
};

export default Footer;
