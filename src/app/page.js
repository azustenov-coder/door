"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t, mounted } = useLanguage();
  const [currentSectionSlide, setCurrentSectionSlide] = useState(0);

  const sectionSlides = [
    "/images/glavniy.webp",
    "/images/image.webp",
    "/images/6.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSectionSlide((prev) => (prev + 1) % sectionSlides.length);
    }, 4000); // 4 seconds for the bottom slider
    return () => clearInterval(timer);
  }, [sectionSlides.length]);

  if (!mounted) return null;

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-slider">
          <div
            className="slider-image active"
            style={{ backgroundImage: `url('/images/4.jpg')` }}
          />
        </div>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <div className="hero-content">
            <h1>{t("home", "heroTitle")}</h1>
            <p>{t("home", "heroSubtitle")}</p>
            <button className="hero-btn">
              {t("content", "learnMore")}
            </button>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="features">
          <div className="feature">
            <img 
              src="/images/minimalizm.jpg" 
              alt="Minimalist Design - Interior" 
              style={{ width: "100%", height: "350px", objectFit: "cover", marginBottom: "25px", borderRadius: "4px" }}
            />
            <h3>{t("home", "feature1")}</h3>
            <p>{t("home", "feature1Desc")}</p>
          </div>
          <div className="feature">
            <div style={{ width: "100%", height: "350px", overflow: "hidden", marginBottom: "25px", borderRadius: "4px", background: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img 
                src="/images/alimin.png" 
                alt="Technical Quality - Aluminum Profiles" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <h3>{t("home", "feature2")}</h3>
            <p>{t("home", "feature2Desc")}</p>
          </div>
          <div className="feature">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
              alt="Individual" 
              style={{ width: "100%", height: "350px", objectFit: "cover", marginBottom: "25px", borderRadius: "4px" }}
            />
            <h3>{t("home", "feature3")}</h3>
            <p>{t("home", "feature3Desc")}</p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "100px" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", marginBottom: "40px", fontWeight: "600", textAlign: "center" }}>
            {t("home", "premiumSolutions")}
          </h2>
        </div>
        
        <div style={{ 
          position: "relative", 
          width: "100%",
          overflow: "hidden"
        }}>
          {sectionSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: index === currentSectionSlide ? "relative" : "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: index === currentSectionSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                zIndex: index === currentSectionSlide ? 1 : 0
              }}
            >
              <img 
                src={slide} 
                alt="Innovative System" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ 
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}>
                <div className="container">
                  <div style={{ 
                    color: "white", 
                    backgroundColor: "rgba(0,0,0,0.4)", 
                    padding: "40px",
                    backdropFilter: "blur(8px)",
                    borderRadius: "8px",
                    maxWidth: "600px",
                    pointerEvents: "auto"
                  }}>
                    <h3 style={{ fontSize: "32px", marginBottom: "15px", fontWeight: "700" }}>{t("home", "innovativeSystems")}</h3>
                    <p style={{ fontSize: "18px", opacity: 0.9, lineHeight: "1.6" }}>
                      {t("home", "innovativeDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div style={{ 
            position: "absolute", 
            bottom: "30px", 
            left: "50%", 
            transform: "translateX(-50%)", 
            display: "flex", 
            gap: "15px", 
            zIndex: 10 
          }}>
            {sectionSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSectionSlide(index)}
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  border: "2px solid white",
                  backgroundColor: index === currentSectionSlide ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
