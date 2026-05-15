"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export default function SwingDoorsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page">
      <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="product-intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "80px" }}>
          <Reveal>
            <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px", letterSpacing: "-1.5px" }}>
              {t("products", "swingTitle")}
            </h1>
            <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "40px" }}>
              {t("products", "swingDesc")}
            </p>
            <div style={{ padding: "30px", background: "#f9f9f9", borderRadius: "12px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>{t("products", "features")}</h2>
              <ul style={{ color: "var(--text-secondary)", lineHeight: "2.2", fontSize: "16px", listStyle: "none", padding: 0 }}>
                <li><span style={{ color: "#000", marginRight: "10px" }}>✓</span> {t("products", "hiddenHinges")}</li>
                <li><span style={{ color: "#000", marginRight: "10px" }}>✓</span> {t("products", "magneticLock")}</li>
                <li><span style={{ color: "#000", marginRight: "10px" }}>✓</span> {t("products", "primedSurface")}</li>
                <li><span style={{ color: "#000", marginRight: "10px" }}>✓</span> {t("products", "aluminumFrame")}</li>
              </ul>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="product-detail-img" style={{ position: "relative" }}>
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80" 
                alt="Swing Door Detail" 
                style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              />
              <div className="img-badge" style={{ position: "absolute", bottom: "-30px", left: "-30px", padding: "30px", background: "#000", color: "#fff", borderRadius: "8px", maxWidth: "200px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600" }}>Invisible Swing Tizimi</p>
                <p style={{ fontSize: "12px", opacity: 0.7 }}>Premium Sifat</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "80px", marginBottom: "40px" }}>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "40px", textAlign: "center" }}>
              {t("nav", "projects")}
            </h3>
            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px" }}>
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }} />
               <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }} />
               <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }} />
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </div>
  );
}
