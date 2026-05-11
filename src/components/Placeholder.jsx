"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Placeholder({ pageNameKey }) {
  const { t } = useLanguage();

  return (
    <div className="placeholder-content">
      {t("nav", pageNameKey)} - {t("content", "comingSoon")}
    </div>
  );
}
