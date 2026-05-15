"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export default function AccessoriesPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page">
      <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Reveal>
          <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
            <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px", letterSpacing: "-1.5px" }}>
              {t("products", "accessoriesTitle")}
            </h1>
            <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {t("products", "accessoriesDesc")}
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", marginBottom: "80px" }}>
          <Reveal delay={0.2}>
            <div className="accessory-card" style={{ background: "#fcfcfc", borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", transition: "transform 0.3s ease" }}>
              <div style={{ height: "400px", overflow: "hidden", background: "#f0f0f0" }}>
                <img src="/images/hinge.png" alt="Hinges" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "24px", fontWeight: "600" }}>{t("products", "hinges")}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>{t("products", "hingesDesc")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="accessory-card" style={{ background: "#fcfcfc", borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", transition: "transform 0.3s ease" }}>
              <div style={{ height: "400px", overflow: "hidden", background: "#f0f0f0" }}>
                <img src="/images/zamok.jpg" alt="Locks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "24px", fontWeight: "600" }}>{t("products", "locks")}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>{t("products", "locksDesc")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="accessory-card" style={{ background: "#fcfcfc", borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", transition: "transform 0.3s ease" }}>
              <div style={{ height: "400px", overflow: "hidden", background: "#f0f0f0" }}>
                <img src="/images/handle.png" alt="Handles" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "24px", fontWeight: "600" }}>{t("products", "handles")}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>{t("products", "handlesDesc")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="accessory-card" style={{ background: "#fcfcfc", borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", transition: "transform 0.3s ease" }}>
              <div style={{ height: "400px", overflow: "hidden", background: "#f0f0f0" }}>
                <img src="/images/threshold.png" alt="Automatic Thresholds" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "24px", fontWeight: "600" }}>{t("products", "thresholds")}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7" }}>{t("products", "thresholdsDesc")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </div>
  );
}
