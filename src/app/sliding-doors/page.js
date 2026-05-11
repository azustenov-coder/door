"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SlidingDoorsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <section style={{ maxWidth: "800px", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>
          {t("products", "slidingTitle")}
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
          {t("products", "slidingDesc")}
        </p>
      </section>

      <div style={{ marginBottom: "80px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", position: "relative" }}>
        <img 
          src="/images/suriladigan.png" 
          alt="Sliding Door System - Technical and Interior" 
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        {/* CSS Patch to hide the sparkle */}
        <div style={{
          position: "absolute",
          bottom: "12%",
          right: "8%",
          width: "60px",
          height: "60px",
          backgroundColor: "#d8c9bc", // Color sampled from the floor
          backgroundImage: "url('/images/suriladigan.png')",
          backgroundPosition: "bottom 12% right 20%", // Use a nearby clean spot
          backgroundSize: "1200% auto", // Match the original image scale
          filter: "blur(2px)",
          borderRadius: "50%",
          opacity: 0.9
        }}></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>{t("products", "spaceSaving")}</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            {t("products", "spaceSavingDesc")}
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>{t("products", "silentMotion")}</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            {t("products", "silentMotionDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
