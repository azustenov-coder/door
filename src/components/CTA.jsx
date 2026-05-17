"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="cta-section" style={{ padding: "100px 0", background: "#fcfcfc", textAlign: "center", borderTop: "1px solid #eee" }}>
      <div className="container">
        <Reveal>
          <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "20px", color: "#000", letterSpacing: "-1.5px" }}>
            {t("cta", "title")}
          </h2>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px" }}>
            {t("cta", "subtitle")}
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "60px" }}>
            <a href="https://t.me/union_doors_bot" target="_blank" rel="noopener noreferrer" className="hero-btn" style={{ background: "#0088cc", color: "#fff" }}>
              {t("cta", "button1")}
            </a>
            <a href="tel:+998901234567" className="hero-btn" style={{ border: "1px solid #000", background: "transparent", color: "#000" }}>
              {t("cta", "button2")}
            </a>
          </div>

          <div style={{ marginTop: "60px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "30px", color: "#000" }}>Yoki hoziroq ariza qoldiring:</h3>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
