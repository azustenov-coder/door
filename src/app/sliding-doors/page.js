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
          <div style={{ marginBottom: "80px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)", position: "relative" }}>
            <img 
              src="/images/suriladigan.png" 
              alt="Sliding Door System - Technical and Interior" 
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {/* CSS Patch to hide the sparkle - adjusted for new layout */}
            <div style={{
              position: "absolute",
              bottom: "12%",
              right: "8%",
              width: "80px",
              height: "80px",
              backgroundColor: "#d8c9bc",
              backgroundImage: "url('/images/suriladigan.png')",
              backgroundPosition: "bottom 12% right 20%",
              backgroundSize: "1200% auto",
              filter: "blur(3px)",
              borderRadius: "50%",
              opacity: 0.95
            }}></div>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: "80px" }}>
          <Reveal delay={0.3}>
            <div style={{ padding: "40px", background: "#fcfcfc", borderRadius: "12px", border: "1px solid #eee" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>{t("products", "spaceSaving")}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>
                {t("products", "spaceSavingDesc")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ padding: "40px", background: "#fcfcfc", borderRadius: "12px", border: "1px solid #eee" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>{t("products", "silentMotion")}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>
                {t("products", "silentMotionDesc")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </div>
  );
}
