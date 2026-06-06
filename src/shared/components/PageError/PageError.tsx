import { useTranslation } from "react-i18next";

import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react";
import { Button } from "@/shared/components/ui";

import styles from "./PageError.module.scss";

const PageError = () => {
  const { t } = useTranslation();

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.icon} />
        <h3 className={styles.title}>{t("errorTitle")}</h3>
        <p className={styles.description}>{t("errorDescription")}</p>
        <Button
          theme="primary"
          form="rounded"
          className={styles.button}
          onClick={handleReloadClick}
        >
          {t("reload")}
        </Button>
      </div>
    </div>
  );
};

export default PageError;
