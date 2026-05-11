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
        
        <div className="innovative-slider">
          {sectionSlides.map((slide, index) => (
            <div
              key={index}
              className={`innovative-slide ${index === currentSectionSlide ? 'active' : ''}`}
            >
              <img 
                src={slide} 
                alt="Innovative System" 
                className="innovative-image"
              />
              <div className="innovative-content-overlay">
                <div className="container">
                  <div className="innovative-text-box">
                    <h3>{t("home", "innovativeSystems")}</h3>
                    <p>{t("home", "innovativeDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="innovative-dots">
            {sectionSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSectionSlide(index)}
                className={`dot ${index === currentSectionSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
