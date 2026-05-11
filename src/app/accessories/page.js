"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AccessoriesPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <section style={{ maxWidth: "800px", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>
          {t("products", "accessoriesTitle")}
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
          {t("products", "accessoriesDesc")}
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        <div style={{ background: "#f9f9f9", borderRadius: "8px", overflow: "hidden", border: "1px solid #eee" }}>
          <div style={{ height: "300px", overflow: "hidden" }}>
            <img src="/images/ruchkaaa1.png" alt="Hinges" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "30px" }}>
            <h3 style={{ marginBottom: "15px", fontSize: "20px" }}>{t("products", "hinges")}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>{t("products", "hingesDesc")}</p>
          </div>
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", overflow: "hidden", border: "1px solid #eee" }}>
          <div style={{ height: "300px", overflow: "hidden" }}>
            <img src="/images/zamok.jpg" alt="Locks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "30px" }}>
            <h3 style={{ marginBottom: "15px", fontSize: "20px" }}>{t("products", "locks")}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>{t("products", "locksDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
