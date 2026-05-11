"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MasonryGallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      category: "swing",
      titleKey: "p1",
      imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "sliding",
      titleKey: "p2",
      imgUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "swing",
      titleKey: "p4",
      imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      category: "sliding",
      titleKey: "p5",
      imgUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "swing",
      titleKey: "p6",
      imgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      category: "sliding",
      titleKey: "p8",
      imgUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    }
  ];

  const filteredProjects = projectsData.filter(
    (p) => filter === "all" || p.category === filter
  );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredProjects.length]);

  return (
    <div>
      <div className="filter-section" style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px", color: "var(--text-secondary)" }}>
          {t("filters", "title")}
        </h3>
        <ul className="filter-list" style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>{t("filters", "all")}</button>
          </li>
          <li>
            <button className={`filter-btn ${filter === "swing" ? "active" : ""}`} onClick={() => setFilter("swing")}>{t("filters", "swing")}</button>
          </li>
          <li>
            <button className={`filter-btn ${filter === "sliding" ? "active" : ""}`} onClick={() => setFilter("sliding")}>{t("filters", "sliding")}</button>
          </li>
        </ul>
      </div>

      <div className="masonry-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="grid-item"
            onClick={() => openLightbox(index)}
          >
            <img src={project.imgUrl} alt={t("projects", project.titleKey)} loading="lazy" />
            <div className="item-overlay">
              <span className="item-category">
                {t("categories", project.category)}
              </span>
              <h4 className="item-title">{t("projects", project.titleKey)}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={`lightbox ${lightboxOpen ? "active" : ""}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
        {filteredProjects.length > 0 && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={filteredProjects[currentIndex].imgUrl} alt={t("projects", filteredProjects[currentIndex].titleKey)} />
            <div className="lightbox-caption">
              <strong>{t("projects", filteredProjects[currentIndex].titleKey)}</strong> —{" "}
              {t("categories", filteredProjects[currentIndex].category)}
            </div>
          </div>
        )}
        <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
        <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
}
