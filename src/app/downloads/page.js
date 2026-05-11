"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DownloadsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <section style={{ maxWidth: "800px", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>
          {t("nav", "downloads")}
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
          Download our latest catalogs and technical drawings.
        </p>
      </section>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="#" style={{ padding: "20px", border: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>General Catalog 2024 (PDF)</span>
          <span style={{ fontWeight: "600" }}>DOWNLOAD</span>
        </a>
        <a href="#" style={{ padding: "20px", border: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Technical Drawings - Swing Systems (DXF/PDF)</span>
          <span style={{ fontWeight: "600" }}>DOWNLOAD</span>
        </a>
      </div>
    </div>
  );
}
