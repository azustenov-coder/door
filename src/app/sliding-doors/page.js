"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export default function SlidingDoorsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page">
      <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Reveal>
          <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
            <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px", letterSpacing: "-1.5px" }}>
              {t("products", "slidingTitle")}
            </h1>
            <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {t("products", "slidingDesc")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginBottom: "80px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}>
            <img 
              src="/images/sliding_interior.png" 
              alt="Sliding Door Interior" 
              style={{ width: "100%", height: "600px", objectFit: "cover", display: "block" }}
            />
          </div>
        </Reveal>

        <div className="product-intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "100px" }}>
          <Reveal>
            <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>{t("products", "slidingInWall")}</h2>
            <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "30px" }}>
              {t("products", "slidingInWallDesc")}
            </p>
            <div className="product-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
                <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>{t("products", "spaceSaving")}</h4>
                <p style={{ fontSize: "14px", opacity: 0.7 }}>{t("products", "usableArea")}</p>
              </div>
              <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
                <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>{t("products", "silentMotion")}</h4>
                <p style={{ fontSize: "14px", opacity: 0.7 }}>{t("products", "silentSystem")}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <img 
              src="/images/cassette.png" 
              alt="Cassette System Detail" 
              className="detail-img"
              style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="black-card" style={{ background: "#000", color: "#fff", padding: "80px", borderRadius: "24px", marginBottom: "80px", textAlign: "center" }}>
            <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>{t("products", "slidingOnWall")}</h2>
            <p style={{ fontSize: "18px", opacity: 0.8, maxWidth: "700px", margin: "0 auto 40px" }}>
              {t("products", "slidingOnWallDesc")}
            </p>
            <img 
              src="/images/suriladigan.png" 
              alt="Sliding System" 
              className="onwall-img"
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        </Reveal>
      </section>

      <CTA />
    </div>
  );
}
