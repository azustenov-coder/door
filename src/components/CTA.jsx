"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="cta-section" style={{ padding: "100px 0", background: "#000", color: "#fff", textAlign: "center" }}>
      <div className="container">
        <Reveal>
          <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "20px", letterSpacing: "-1px" }}>
            {t("cta", "title") || "Ready to Start Your Project?"}
          </h2>
          <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px" }}>
            {t("cta", "subtitle") || "Contact our experts today for a free consultation and personalized quote."}
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hero-btn" style={{ background: "#fff", color: "#000" }}>
              {t("cta", "button1") || "Telegram"}
            </a>
            <a href="tel:+998" className="hero-btn" style={{ border: "1px solid #fff", background: "transparent", color: "#fff" }}>
              {t("cta", "button2") || "Call Now"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
