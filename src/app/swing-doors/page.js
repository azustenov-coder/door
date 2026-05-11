"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SwingDoorsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <section style={{ maxWidth: "800px", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>
          {t("products", "swingTitle")}
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
          {t("products", "swingDesc")}
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "80px" }}>
        <img 
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80" 
          alt="Swing Door Detail" 
          style={{ width: "100%", height: "auto" }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>{t("products", "features")}</h2>
          <ul style={{ color: "var(--text-secondary)", lineHeight: "2", fontSize: "15px", listStyle: "none" }}>
            <li>• {t("products", "hiddenHinges")}</li>
            <li>• {t("products", "magneticLock")}</li>
            <li>• {t("products", "primedSurface")}</li>
            <li>• {t("products", "aluminumFrame")}</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "40px" }}>
        <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "30px" }}>
          {t("nav", "projects")}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
           <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" style={{ width: "100%" }} />
           <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" style={{ width: "100%" }} />
           <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
