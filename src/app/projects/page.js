"use client";

import MasonryGallery from "@/components/MasonryGallery";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="projects-page">
      <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Reveal>
          <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
            <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px", letterSpacing: "-1.5px" }}>
              {t("nav", "projects")}
            </h1>
            <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {t("home", "innovativeDesc")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <MasonryGallery />
        </Reveal>
      </section>

      <CTA />
    </div>
  );
}
